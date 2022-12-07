import { useState } from 'react';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState['people']>([
		{
			name: 'Trkulja Sasa',
			age: 55,
			url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
			note: 'Party organizer',
		},
	]);

	return (
		<div className='App'>
			<h1 className='text-center text-3xl lg:text-5xl mt-16'>
				People Invited to my Party
			</h1>
			<List people={people} />
			<AddToList people={people} setPeople={setPeople} />
		</div>
	);
}

export default App;
