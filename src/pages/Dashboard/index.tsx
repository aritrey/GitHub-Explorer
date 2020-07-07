import React, { useState, useEffect } from "react";

import { Title, Form, Repositories,Error } from "./styles";
import logoImg from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface Repository{//wir brauchen nur type von dem was wir wirklich brauchen
  full_name:string,
  owner:{
    login:string,
    avatar_url:string,
  
  }
  description:string
    }
//fc=function component
const Dashboard = () => {
  const [repositories, setRepositories] = useState<Repository[]>(()=>{
  const storesRepos=  localStorage.getItem("@GithubExplorer:repositories")
  if(storesRepos){
   return JSON.parse(storesRepos)
  }
  return []
  });



  useEffect(()=>{
    //richtig cool, man kann was in localem browser schreiben
    localStorage.setItem("@GithubExplorer:repositories",JSON.stringify(repositories))//arayys zu jsonstringify
  },[repositories])


  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");




  const handleAddRepository = async () => {
    if(!newRepo){
      setInputError("Digite o author/nome do repositório")
    }else{
    try{
      setInputError("")
      setNewRepo("")
    const response = await api.get(`repos/${newRepo}`); ///aritrey/Amazon-Crawler`)
    setRepositories(repositories.concat([response.data]))
    }catch(e){
      setInputError("Error na busca por esse repositório")
    }
  }
  };




  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>explor github repositories</Title>
      {/* ->nicht nicht falsch */}
      <Form hasError={!!inputError} onSubmit={handleAddRepository} action="#">
        {/* //onSubmit={handleAddRepository}:feuert, wenn auf button gedrücht */}
        {/* action="#": ist hier damit es nicht versucht andere seite zu öffnen */}
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome de repository aqui"
        />
        <button type="submit">pesquisar</button>
      </Form>
      {inputError&&<Error>{inputError}</Error>}
      {repositories.map(repository=>
      <Repositories key={repository.full_name}>
        <Link to={`/repository/${repository.full_name}`}>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={24} />
        </Link>
      </Repositories>)}
    </>
  );
};

export default Dashboard;
