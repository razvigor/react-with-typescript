import React from 'react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {
	return (
		<div className='w-full px-6 md:w-[640px] md:px-0 mx-auto mt-16'>
			<ul className='flex flex-col gap-3'>
				{people.map((item, index) => (
					<li
						key={index}
						className='flex flex-wrap justify-start items-center border border-gray-400 p-4 rounded-md gap-4'
					>
						<div className='flex flex-wrap items-center gap-3 w-full md:w-[37%]'>
							<img
								src={item.url}
								alt={item.name}
								className='w-[60px] rounded-full'
							/>
							<h2 className='font-bold'>{item.name}</h2>
						</div>
						<p className=' w-full md:w-[23%]'>{item.age} years old</p>
						{item.note && <p className='w-full md:w-[30%]'>{item.note}</p>}
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
