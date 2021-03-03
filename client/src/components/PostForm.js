
import React from 'react'

import {useMutation} from '@apollo/client'

import { Button, Form } from 'semantic-ui-react'

import {useForm} from '../util/hooks'

import gql from 'graphql-tag'
function PostForm() {


    const { values, onChange, onSubmit} = useForm(createPostCallback, {
        body: ''
    })

    const [createPost, { error }  ] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        update(proxy, result){
            console.log(result)
            values.body = ''
        }
    })

    function createPostCallback(){
        createPost()
    }


    return (
        <Form onSubmit={onSubmit}>
            <h2>Create Post</h2>

            <Form.Field>
                <Form.Input
                placeholder="What's up"
                name="body"
                onChange={onChange}
                value={values.body}
                />
                <Button type='submit' color='teal'>
                    Post
                </Button>
            </Form.Field>
        </Form>
    )
}


const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;
export default PostForm
