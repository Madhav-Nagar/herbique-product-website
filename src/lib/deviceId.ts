const DEVICE_ID_KEY = "herbique_device_id"

/**
 * Returns a stable, unique ID for this browser/device.
 * Generated once using crypto.randomUUID() and persisted in localStorage.
 */
export function getDeviceId(): string {
  let id = localStorage.getItem(DEVICE_ID_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(DEVICE_ID_KEY, id)
  }
  return id
}
