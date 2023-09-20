function TextArea({ placeholder, value, onChange }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="rounded-md bg-primary-50 px-5 py-4 text-xl focus:outline focus:outline-primary"
      rows="9"
    />
  )
}

export default TextArea
