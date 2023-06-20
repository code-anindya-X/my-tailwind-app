const Input = (props) => {
  const className = "input input-bordered " + props.className;
  return (
    <div>
      <div>
        {props.label && (
          <label className="label">
            <span className="label-text">{props.label}</span>
          </label>
        )}
        <input {...props} className={className} />
      </div>
    </div>
  );
};

export default Input;
