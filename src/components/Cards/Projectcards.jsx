import React from 'react'
import styled from 'styled-components'
import emp from "../Images/emp.png";
import password from "../Images/password.png";
import todoList from "../Images/todoList.png"; 

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Buttona = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card >
            {console.log(project.subTitle)}
            { (project.subTitle === 'password') ?
                <Image src={password}/>
                :
                ( (project.subTitle === 'emp') ?
                <Image src={emp}/> :
                <Image src={todoList}/>
            )
            }
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
            </Details>
            <Buttona dull href={project?.github} target='new'>View Code</Buttona>
        </Card>
    )
}

export default ProjectCards