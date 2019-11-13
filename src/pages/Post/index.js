import React, { Component } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import logo from '../../img/stethoscope.svg';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

import api from '../../services/api';


import Container from '../../components/container';
import Row from '../../components/row';
import { Loading, Header, Title, Form} from './styles';

export default class Post extends Component {
  state ={
    loading: true,
    specialties: [],
    name: '',
    crm: '',
    phone: '',
    uf: '',
    city: '',
    specs: [],
    redirect: false 
  }

  async componentDidMount(){
    const cont = await api.get('/specialtie');

    const doc = cont.data;
    this.setState({
      specialties: doc,
      loading: false,
    })
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value, error: null });
  };
  handleCrmChange = e => {
    this.setState({ crm: e.target.value, error: null });
  };
  handlePhoneChange = e => {
    this.setState({ phone: e.target.value, error: null });
  };
  handleUfChange = e => {
    this.setState({ uf: e.target.value, error: null });
  };
  handleCityChange = e => {
    this.setState({ city: e.target.value, error: null });
  };

  handleCheckbox = async action => {

    const  {specs}  = this.state;
    const convert = specs;

    const index = convert.indexOf(action);

    if (index === -1){
      convert.push(action)
      await this.setState({
        specs: convert,
    })
    }else{
      convert.splice(index,1)
      await this.setState({
        specs: convert,
    })
    }

  };

    handleSubmit = async event => {
    event.preventDefault();
    const { specs, name, crm, phone, uf, city } = this.state;

    const req =  api.post('/doctor', {
      name,
      crm,
      phone,
      state: uf,
      city,
      specialties: specs,
    })

    this.setState({
      name: '',
    crm: '',
    phone: '',
    uf: '',
    city: '',
    specs: [],
    });

  }


  render() {
    const { loading, specialties, name, crm, phone, uf, city } = this.state;

    if(this.state.redirect) {
      return <Redirect to="/login/" />
    }

    if (loading) {
      return (
        <Loading loading={loading}>
          {loading ? (
            <AiOutlineLoading color="#fff" size={80} />
          ) : (
            <AiOutlineLoading display="none" />
          )}
        </Loading>
      );
    }

    return(

      <Container>
        <Header>
          <img src={logo} alt='Logo'></img>
          <h1>Doctor_Crud</h1>
        </Header>
        <Link to={`/`}>Voltar</Link>
        <Row/>
        <Title><h1>Cadastrar Médico</h1></Title>

        <Form>
          <form onSubmit={this.handleSubmit}>
            <div>
              <h3>Nome</h3>
              <input type="text" value={name} onChange={this.handleNameChange}></input>
              <h3>CRM</h3>
              <input type="number" value={crm} onChange={this.handleCrmChange}></input>
              <h3>Telefone</h3>
              <input type="number" value={phone} onChange={this.handlePhoneChange}></input>
              <h3>Estado</h3>
              <input type="text" value={uf} onChange={this.handleUfChange}></input>
              <h3>Cidade</h3>
              <input type="text" value={city} onChange={this.handleCityChange}></input>
            </div>

          <p>
            <h3>Selecione as Especialidades</h3>
            <span>Selecione ao menos 2</span>
            {
              specialties.map(e => (
                <div>
                <input onClick={() => this.handleCheckbox(e.id)} type="checkbox" id={e.specialtie_name} key={e.id} name={e.specialtie_name} ></input>
                <label htmlFor={e.id}>{e.specialtie_name}</ label><br/>
                </div>
              ))
            }
            <button type="submit">Cadastrar</button>
          </p>
          </form>
          
        </Form>
      </Container>
    )
  }

}