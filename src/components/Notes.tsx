import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import NoteForm from './NoteForm'

interface NoteProps {
	id: number
	content: string
}

const Notes: React.FC = () => {
	const [notes, setNotes] = useState<NoteProps[]>([])

	const fetchNotes = async () => {
		const response = await axios.get('http://localhost:7070/notes')
		setNotes(response.data)
	}

	useEffect(() => {
		fetchNotes()
	}, [])

	const handleAddNote = async (content: string) => {
		await axios.post('http://localhost:7070/notes', {
			id: 0,
			content,
		})
		fetchNotes()
	}

	const handleDeleteNote = async (id: number) => {
		await axios.delete(`http://localhost:7070/notes/${id}`)
		fetchNotes()
	}

	const handleRefresh = () => {
		fetchNotes()
	}

	return (
		<div className='notes-container'>
			<NoteForm onAdd={handleAddNote} />
			<button className='refresh-btn' onClick={handleRefresh}>
				↻
			</button>
			<div className='card-container'>
				{notes.map(note => (
					<NoteCard
						key={note.id}
						id={note.id}
						content={note.content}
						onDelete={handleDeleteNote}
					/>
				))}
			</div>
		</div>
	)
}

export default Notes
