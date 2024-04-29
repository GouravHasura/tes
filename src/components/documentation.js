import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Sidebar } from './sidebar';

const markdownContent = `
# GraphQL API Load Testing
Contriving a system for load and functional testing of GraphQL APIs using the Artillery testing framework. Load testing involves evaluating the performance, scalability, and reliability of a GraphQL API under varying levels of simulated user traffic.

## Local Setup:

### 1. ** Clone Repository**: Clone this repository to your local machine.
    git clone https://github.com/<>
   

### 2. **.env**: Create a .env with example.env.
  
### 3. Create a .env.artillery file with your graphQL endpoint and x-hasura-admin-secret 
    
### 4. Update the query folder with your test queries

### 5. Run the docker container

   
## Grafana Setup:



`;


const MainContent = () => {
    return (
        <div className='px-10 py-10 max-w-5xl ml-64 mt-12'>
            <ReactMarkdown 
             components={{
                a: ({ node, ...props }) => (
                  <a className="text-blue-600 underline" {...props} />
                ),
                h1: ({ node, ...props }) => (
                    <h2
                      className="text-hds-m-h2 tb:text-hds-t-h4 db:text-hds-d-h4 text-neutral-1000 pb-4 first:border-none first:pt-0 first:mt-0 mt-10 pt-10 border-t border-neutral-200"
                      {...props}
                    />
                  ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-hds-m-h4 tb:text-hds-t-h4 db:text-hds-d-h4 text-neutral-1000 pb-4 first:border-none first:pt-0 first:mt-0 mt-10 pt-10 border-t border-neutral-200"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => <p className="mb-2 lg:mb-4 " {...props} />,
                // ul: ({ node, ...props }) => (
                //   <ul className="mb-2 lg:mb-4" {...props} />
                // ),
                // li: ({ node, ...props }) => (
                //   <li className=" list-disc list-inside py-2" {...props} />
                // ),
                
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className=" break-words w-fit bg-neutral-50 p-2 my-2 rounded border border-neutral-200 [&>p]:mb-0"
                    {...props}
                  />
                ),
      
                pre: ({ node, ...props }) => (
                  <pre
                    className=" whitespace-break-spaces my-2 [&>code]:p-4 [&>code]:rounded-lg [&>code]:my-2 break-words [&>code]:w-full"
                    {...props}
                  />
                ),
              }}
            remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
        </div>
    );
};

export default function Doc(){
  return(
    <div className="flex">
    <Sidebar />
    <MainContent />
  </div>
  )
};
