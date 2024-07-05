import {
  ComponentProps,
  FC,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { PlayerProps } from './player.types.ts';
import toRgb from 'hex-rgb';
import { color, getFromTheCloud, toRgba } from '@/shared/utils';
import { Play } from '@/shared/icons';

type WrapProps = {
  isInit: boolean;
};

const Wrap = styled('div')<WrapProps>`
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  width: min-content;

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: ${({ isInit }) => (isInit ? 'none' : 'block')};
  }
`;

const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.23);
    &::after {
      background: ${({ theme }) =>
        toRgba(
          toRgb(color(50)(theme), {
            alpha: 0.13,
            format: 'object',
          }),
        )};
    }
  }

  &::after {
    content: '';
    height: 60px;
    width: 60px;
    display: block;
    top: 50%;
    left: 50%;
    border-radius: 60px;
    position: absolute;
    translate: -50% -50%;
    transition: background 0.2s ease-in-out;
    background: ${({ theme }) =>
      toRgba(
        toRgb(color(50)(theme), {
          alpha: 0.2,
          format: 'object',
        }),
      )};
  }
`;

const Video = styled(
  forwardRef<HTMLVideoElement, PropsWithChildren<ComponentProps<'video'>>>(
    ({ children, ...props }, ref) => (
      <video ref={ref} {...props}>
        {children}
      </video>
    ),
  ),
)`
  object-fit: cover;
  object-position: center center;
  display: block;
`;

export const Player: FC<PlayerProps> = ({ media }) => {
  const [isInit, setIsInit] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isInit) return;
    videoRef.current?.play();
  }, [isInit]);

  if (!media) return;

  return (
    <Wrap isInit={isInit}>
      <Video
        width={740}
        height={416}
        ref={videoRef}
        controls={isInit}
        poster={getFromTheCloud(media.poster)}
      >
        <source src={getFromTheCloud(media.url)} type='video/mp4' />
      </Video>
      {!isInit && (
        <PlayBtn onClick={() => setIsInit(true)}>
          <Play />
        </PlayBtn>
      )}
    </Wrap>
  );
};
