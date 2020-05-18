import { Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'
import { useState } from 'react'

const NewNotePage = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [formFields, setFormFields] = useState<NewNoteFormFields>({
        note: '',
        tags: []
    })

    const closeError = () => setError('')

    const handleSubmit = async () => {
        setLoading(true)
        try {
            // post to api endpoint
            console.log(formFields)
        } catch ({ code, message }) {
            setError(message || 'Unexpected error')
        } finally {
            setLoading(false)
        }
    }

    return (
    <div>
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label for="noteArea">New Note</Label>
            <Input
                type="textarea"
                name="text"
                id="noteArea"
                value={formFields.note}
                onChange={e => setFormFields({
                    note: e.target.value, tags: formFields.tags
                })}
            />


        </FormGroup>
        {
            loading ?
            <Button className="btn btn-primary" disabled>
                <Spinner animation="grow" variant="success" /> Sending...
            </Button> :
            <Button className="btn btn-primary" onClick={() => handleSubmit()}>Submit</Button>
        }
    </Form>
    </div>)
}

interface NewNoteFormFields {
    note: string,
    tags: string[]
}

export default NewNotePage
