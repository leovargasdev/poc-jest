export const Item = () => (
  <div>
    <h1>item</h1>
  </div>
)

export function double(x: number): number {
  return x * 2
}

export function concat(...args: string[]): string {
  return args.reduce((result, param) => result + param, '')
}
