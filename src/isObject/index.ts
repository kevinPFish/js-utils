
export default function isObjcet (val: any): boolean {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}
