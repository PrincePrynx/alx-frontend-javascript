
export default function createInt8TypedArray(length, position, value) {
    if (position >= length) {
      throw new Error('Position outside range');
    }
    const view = new Int8Array(length);
    view.fill(value, position, position + 1);
    return new DataView(view.buffer);
  }
