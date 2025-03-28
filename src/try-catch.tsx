type Success<T> = {
  data: T;
  success: true;
  error: null;
};
type Failure<E> = {
  data: null;
  success: false;
  error: E;
};
type Result<T, E = Error> = Success<T> | Failure<E>;

export async function tryCatch<T, E = Error>(
  fn: () => Promise<T>,
  onError?: (error: E) => void
): Promise<Result<T, E>> {
  try {
    const data = await fn();
    return { data, success: true, error: null };
  } catch (error) {
    if (onError) onError(error as E);
    return { data: null, success: false, error: error as E };
  }
}
