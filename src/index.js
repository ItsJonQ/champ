import { names } from './data.json'

/**
 * Returns a random name from the list of names.
 * @param {number} seed A specific index for a name.
 * @returns {string} A name.
 * @example
 * getName()
 * // slick
 */
export function getName(seed) {
  const index = seed || Math.floor(Math.random() * names.length)
  return names[index]
}

export default getName
