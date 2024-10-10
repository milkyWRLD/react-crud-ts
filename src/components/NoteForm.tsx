import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface NoteFormProps {
	onAdd: (content: string) => void
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
	const [content, setContent] = useState('')

	const handleAdd = () => {
		onAdd(content)
		setContent('')
	}

	return (
		<div>
			<h2>Notes</h2>
			<ReactQuill
				value={content}
				onChange={value => setContent(value)}
				modules={{ toolbar: [['bold', 'italic', 'underline', 'strike']] }}
			/>
			<button className='btn btn-primary add-btn' onClick={handleAdd}>
				Add
			</button>
		</div>
	)
}

export default NoteForm
