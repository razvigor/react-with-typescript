import { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
	people: Props['people'];
	setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: '',
		age: '',
		url: '',
		note: '',
	});

	const changeHandler = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};
	const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!input.name || !input.age || !input.url) {
			return;
		}
		setPeople([
			...people,
			{
				name: input.name,
				age: parseInt(input.age),
				url: input.url,
				note: input.note,
			},
		]);
		setInput({
			name: '',
			age: '',
			url: '',
			note: '',
		});
	};
	return (
		<div className='w-full px-6 md:w-[640px] md:px-0 mx-auto mt-16'>
			<form className='flex flex-col gap-4' onSubmit={submitHandler}>
				<input
					type='text'
					name='name'
					value={input.name}
					placeholder='Name'
					className='w-full h-10 border border-gray-400 rounded-md pl-3'
					onChange={changeHandler}
				/>
				<input
					type='text'
					name='age'
					value={input.age}
					placeholder='Age'
					className='w-full h-10 border border-gray-400 rounded-md pl-3'
					onChange={changeHandler}
				/>
				<input
					type='text'
					name='url'
					value={input.url}
					placeholder='Image Url'
					className='w-full h-10 border border-gray-400 rounded-md pl-3'
					onChange={changeHandler}
				/>
				<textarea
					name='note'
					value={input.note}
					placeholder='Notes'
					className='w-full h-14 border border-gray-400 rounded-md pl-3'
					onChange={changeHandler}
				></textarea>
				<button
					type='submit'
					className='w-full h-10 bg-slate-600 text-white rounded-md hover:bg-slate-800'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddToList;
