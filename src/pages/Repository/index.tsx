import React, {useState,useEffect } from 'react'
import { useRouteMatch, Link} from 'react-router-dom'
import api from '../../services/api'

import {Header, RepositoryInfo, Issues} from './style'
import logoImg from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface RepositoryParams {
  repository: string
}


interface Repository {
  full_name:string;
  description: string
  owner:{
    login: string,
    avatar_url: string,
  }
  forks: number
  open_issues: number
  stargazers_count: number
}

interface Issue {
  id: number
  title: string
  html_url: string
  user:{
    login: string
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
  const [repo, setRepo] = useState<Repository | null >(null)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(  () => {

    async function loadData():Promise<void>{
      const [repository, issues] = await Promise.all([
        api.get<Repository | null>(`repos/${params.repository}`),
        api.get<Issue[]>(`/repos/${params.repository}/issues`)
      ])

      setRepo ( repository.data)
      setIssues ( issues.data )
    }

    loadData()
  },[params.repository])

  return (
    <>
    <Header>
      <img src={logoImg} alt="Github Explorer"/>
      <Link to="/">
        <FiChevronLeft size={16}/>
        Voltar
      </Link>
    </Header>
    { repo && (
    <RepositoryInfo>
        <>
          <header>
          <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
          <div>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </div>
        </header>
        <ul>
          <li>
              <strong>{repo.stargazers_count}</strong>
              <span>Stars</span>
          </li>
          <li>
              <strong>{repo.forks}</strong>
              <span>Forks</span>
          </li>
          <li>
              <strong>{repo.open_issues}</strong>
              <span>Issues Abertas</span>
          </li>
        </ul>
        </>
    </RepositoryInfo>
      )}
        <Issues>
        {issues.map(issue => (
           <a key={issue.id} href={issue.html_url}>
           <div>
             <strong>{issue.title}</strong>
             <p>{issue.user.login}</p>
           </div>
         <FiChevronRight size={20}/>
         </a>
        ))}
    </Issues>
    </>
  )
}

export default Repository
