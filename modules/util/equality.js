export function isNode (entity) {
  return entity.type === 'node' || entity.type === 'observation';
}
