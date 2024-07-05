export const COMMENTS = `
  id,
  parent,
  created_at,
  comment,
  users (
    first_name,
    last_name,
    avatar,
    is_vip
  )
`;
