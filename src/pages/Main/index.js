import React, { Component } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import logo from '../../img/stethoscope.svg';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/container';
import Row from '../../components/row';
import { Loading, Header, Search, Title, Content } from './styles';

export default class Main extends Component {
  state ={
    loading: true,
    doctors: [],
  }

  async componentDidMount(){
    const data = await api.get('/doctor');

    const doc = data.data;
    console.log(doc);
    this.setState({
      doctors: doc,
      loading: false,
    })
  }



  render() {
    const { loading, doctors } = this.state;

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
        <Row/>
        <Title><h1>Médicos</h1></Title>
        <Search>
          
          <Link to={`/post`}>Cadastrar Novo</Link>
        </Search>
        <Content>
          <ul>{
            doctors.map(doctor => (
              <li key={doctor.id} onClick={this.handleSubmit}>
                <h1>{doctor.name}</h1>
                <span>{'CRM: '+doctor.crm}</span>
                <span>{'Tel: '+doctor.phone}</span>
                <span>{doctor.city+' - '+doctor.state}</span>
                <h4><strong>Especialidades</strong></h4>
                {
                  doctor.Especialidades.map(e =>(
                    <p key={e.id}>{'-'+e.specialtie_name}</p>
                  ))
                }
              </li>
            ))
          }
          </ul>

        </Content>
      </Container>
    )
  }

}