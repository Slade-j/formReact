
function Form() {
    return (
        <div>
					<form>
						<div>
							<label htmlFor='name'>Name</label>
							<input type='text'></input>
						</div>
						<div>
							<label htmlFor='email'>Email</label>
							<input type='text'></input>
						</div>
						<div>
							<label htmlFor='phoneNumber'>Phone number</label>
							<input type='text'></input>
						</div>
						<div>
							<label htmlFor='instructor'>Instructor</label>
							<input type='radio' name='staff' value='instructor'></input>
						</div>
						<div>
							<label htmlFor='student'>Student</label>
							<input type='radio' name='staff' value='student'></input>
						</div>
						<div>
							<label htmlFor='bio'>Bio</label>
							<textarea col='40' row='20' type='text'></textarea>
						</div>
						<div>
							<label htmlFor='notifications'>Sign up for email notifications?</label>
							<input type='checkbox'></input>
						</div>
					</form>
        </div>
    )
}

export default Form;
