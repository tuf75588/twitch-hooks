import React from 'react';
import {useForm} from 'react-hook-form';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  padding: 10px;
  color: #f2f2f2;
  text-align: center;
  margin-bottom: 5rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    padding: 10px;
    border-radius: 5px;
    margin-left: 10px;
  }
`;

function ChannelForm() {
  const {register, handleSubmit, errors, reset} = useForm();
  const [newChannel, setNewChannel] = React.useState('');
  const onSubmit = (data) => {
    console.log({data});
    setNewChannel(data.channel);
  };
  return (
    <React.Fragment>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>Search for channel</label>
        <input
          ref={register({
            required: true,
            validate: (value) => {
              return value.trim().length > 1 && value.trim().length < 20;
            },
            message: 'error message',
          })}
          name="channel"
        />
        {errors.channel && (
          <h4
            style={{
              color: 'tomato',
              marginLeft: '5px',
              textAlign: 'center',
              fontWeight: 300,
            }}
          >
            Channel name must be greater than 4 and less than 20 characters
          </h4>
        )}
      </StyledForm>
      <pre style={{color: '#f2f2f2'}}>
        {JSON.stringify(newChannel, 2, null)}
      </pre>
    </React.Fragment>
  );
}

export default ChannelForm;
