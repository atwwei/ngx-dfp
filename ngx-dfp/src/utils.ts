
export function getSlots(elementIds?: string[]) {
  if (!googletag.apiReady) {
    return [];
  }
  const slots = googletag.pubads().getSlots();
  if (elementIds) {
    return slots.filter(slot => elementIds.indexOf(slot.getSlotElementId()) !== -1);
  }
  return slots;
}

export function clear(elementIds?: string[]) {
  googletag.cmd.push(() => {
    googletag.pubads().clear(getSlots(elementIds));
  });
}

export function cmd(callback: () => void) {
  googletag.cmd.push(callback);
}

export function destroySlots(elementIds?: string[]) {
  googletag.cmd.push(() => {
    googletag.destroySlots(getSlots(elementIds));
  });
}

export function refresh(elementIds?: string[], opt_options?: { changeCorrelator: boolean }) {
  googletag.cmd.push(() => {
    googletag.pubads().refresh(getSlots(elementIds), opt_options);
  });
}
