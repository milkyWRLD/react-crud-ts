import React from 'react'
import ReactQuill from 'react-quill'
import './Notes.css'

interface NoteCardProps {
	id: number
	content: string
	onDelete: (id: number) => void
}

const NoteCard: React.FC<NoteCardProps> = ({ id, content, onDelete }) => {
	return (
		<div className='card'>
			<ReactQuill
				value={content}
				readOnly
				theme='snow'
				modules={{ toolbar: false }}
			/>
			<button className='close-btn' onClick={() => onDelete(id)}>
				⨯
			</button>
		</div>
	)
}

export default NoteCard
