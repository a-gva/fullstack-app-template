import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export function FormUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const instruments = ['Violão', 'Guitarra', 'Piano', 'Baixo'];

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('http://localhost:3333/users', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className='p-5 '>
      <div className=' p-4 '>
        <div className='pb-4'>
          <h1>Cadastro</h1>
        </div>
        <div>
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
              <FloatingLabel
                controlId='floatingTextarea'
                label='Primeiro Nome'
                className='mb-3'
              >
                <Form.Control
                  type='text'
                  placeholder='Seu Nome'
                  {...register('firstName', { required: true })}
                />
                {errors.name && (
                  <div className='text-danger mt-1 mb-4'>
                    <h6>Campo Obrigatório</h6>
                  </div>
                )}
              </FloatingLabel>
            </div>
            <div>
              <FloatingLabel
                controlId='floatingTextarea'
                label='Sobrenome'
                className='mb-3'
              >
                <Form.Control
                  type='text'
                  placeholder='Seu Nome'
                  {...register('lastName', { required: true })}
                />
                {errors.name && (
                  <div className='text-danger mt-1 mb-4'>
                    <h6>Campo Obrigatório</h6>
                  </div>
                )}
              </FloatingLabel>
            </div>
            <div>
              <FloatingLabel
                controlId='floatingInput'
                label='E-mail'
                className='mb-3'
              >
                <Form.Control
                  type='email'
                  placeholder='name@example.com'
                  {...register('email', { required: true })}
                />
                {errors.name && (
                  <div className='text-danger mt-1 mb-4'>
                    <h6>Campo Obrigatório</h6>
                  </div>
                )}
              </FloatingLabel>
            </div>

            <div className='mb-3'>
              <Form.Label>
                <h6>Estado Civil</h6>
              </Form.Label>
              <Form.Select
                aria-label='Default select example'
                {...register('maritalStatus')}
              >
                <option value='single'>Solteiro(a)</option>
                <option value='married'>Casado(a)</option>
                <option value='divorced'>Divorciado(a)</option>
                <option value='widower'>Viúvo(a)</option>
              </Form.Select>
            </div>

            <div className='mb-3'>
              <Form.Label>
                <h6>Plano</h6>
              </Form.Label>
              <Row>
                <Col>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='planRadio'
                      value='silver'
                      {...register('plan', { required: true })}
                    />
                    <label className='form-check-label' htmlFor='planRadio1'>
                      Silver
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='planRadio'
                      value='gold'
                      {...register('plan')}
                    />
                    <label className='form-check-label' htmlFor='planRadio2'>
                      Gold
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='planRadio'
                      value='platinum'
                      {...register('plan')}
                    />
                    <label className='form-check-label' htmlFor='planRadio3'>
                      Platinum
                    </label>
                  </div>
                </Col>
              </Row>
              {errors.plan && (
                <div className='text-danger mt-1 mb-4'>
                  <h6>Campo Obrigatório</h6>
                </div>
              )}
            </div>

            <div className='mb-3'>
              <FloatingLabel controlId='floatingPassword' label='Senha'>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <div className='text-danger mt-1 mb-4'>
                    <h6>Campo Obrigatório</h6>
                  </div>
                )}
              </FloatingLabel>
            </div>

            <div className=''>
              <Button variant='primary' type='submit'>
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FormUser;
