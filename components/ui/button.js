export function Button(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`inline-flex items-center px-4 py-2  text-sm font-medium rounded-md ${props.className}`}>
      {props.children}
    </button>
  );
}
