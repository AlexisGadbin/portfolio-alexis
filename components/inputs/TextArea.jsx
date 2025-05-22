function TextArea({ placeholder, value, onChange, required }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="rounded-md bg-primary-50 px-5 py-4 text-xl focus:outline-solid focus:outline-primary"
      rows="9"
    />
  )
}

export default TextArea
