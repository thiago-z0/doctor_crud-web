import React, { Component } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import logo from '../../img/stethoscope.svg';
import { Link } from 'react-router-dom';

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
  }

  async componentDidMount(){
    const cont = await api.get('/specialtie');

    const doc = cont.data;
    console.log(cont);
    this.setState({
      specialties: doc,
      loading: false,
    })
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value, error: null });
    console.log(this.state.name);
  };
  handleCrmChange = e => {
    this.setState({ crm: e.target.value, error: null });
    console.log(this.state.crm);
  };
  handlePhoneChange = e => {
    this.setState({ phone: e.target.value, error: null });
    console.log(this.state.phone);
  };
  handleUfChange = e => {
    this.setState({ uf: e.target.value, error: null });
    console.log(this.state.uf);
  };
  handleCityChange = e => {
    this.setState({ city: e.target.value, error: null });
    console.log(this.state.city);
  };

  handleTest = async action => {
    const  {specs}  = this.state;

      await this.setState({
        specs: [ ...specs, action]
    })
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
                <input onFocus={() => this.handleTest(e.id)} type="checkbox" id={e.specialtie_name} key={e.id} name={e.specialtie_name} ></input>
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