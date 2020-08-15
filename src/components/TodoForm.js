import React from "react";

function TodoForm({text, handleText, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="item">New Item</label>
                    <input
                        type="text"
                        className="form-control"
                        id="text"
                        name="text"
                        placeholder="e.g. pick up dry-cleaning"
                        value={text}
                        onChange={handleText}
                    ></input>
                </div>
            </div>
            <button type="submit" className="submit-btn">
                Submit
            </button>
        </form>
    )
}
export default TodoForm;