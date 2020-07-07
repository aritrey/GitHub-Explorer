import React, { useEffect, useState } from "react";
import { useRouteMatch,Link, } from "react-router-dom";
import {Header,RepositoryInfo,Issues} from "./styles"
import logoImg from "../../assets/logo.svg"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import api from "../../services/api";



interface RepositoryParams{
  repository:string
}

interface Repository{//wir brauchen nur type von dem was wir wirklich brauchen
  full_name:string;
  owner:{
    login:string;
    avatar_url:string;
  
  }
  description:string;
  stargazers_count:number;
  forks_count:number;
  open_issues_count:number;

    }

    interface Issue{
      html_url:string;
      title:string;
      id:number;
      user:{
        login:string;
      }
    }


//fc=function component
const Repository = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository,setRepository]=useState<Repository|null>(null)
  const [issues,setIssues]=useState<Array<Issue>>([])


useEffect(()=>{
  // const [repository,issues]=await Promise.all([
  //   api.get(`/repos/${params.repository}`),
  //   api.get(`/repos/${params.repository}/issues`)
  // ])
api.get(`/repos/${params.repository}`).then(response=>{
 setRepository(response.data)
 console.log((response.data))
})
api.get(`/repos/${params.repository}/issues`).then(response=>{
  setIssues(response.data)
})
// =>so macht es die requests vzur selben zeit mit await nicht; was man auch machen kann: Promise.all()
},[params.repository])


  return (<> 
  <Header>
    <img src={logoImg} alt="Github Explorer"/>
    <Link to="/">
      <FiChevronLeft size={20}/>
      Voltar
    </Link>

  </Header>
 {repository ? <RepositoryInfo>
    <header>
      <img alt={repository.owner.login} src={repository.owner.avatar_url}/>
      <div>
        <strong>
        {repository.full_name}
        </strong>
        <p>{repository.description}</p>
      </div>
    </header>
    <ul>
      <li>
      <strong>
    {repository.stargazers_count}
        </strong>
        <span>
          starts
        </span>
      </li>
      <li>
      <strong>
       {repository.forks_count}
        </strong>
        <span>
          Forks
        </span>
      </li>
      <li>
      <strong>
     {repository.open_issues_count}
        </strong>
        <span>
       Issues Abertas
        </span>
      </li>
    </ul>
  </RepositoryInfo>:<p>carregando</p>}
 {issues.map(issue=>(
   <Issues>
     <a key={issue.id} href={issue.html_url}>
          <div>
            <strong>{issue.title}</strong>
            <p>{issue.user.login}</p>
          </div>
          <FiChevronRight size={24} />
        </a>
  </Issues>
  ))}
  </>)
};

export default Repository;
