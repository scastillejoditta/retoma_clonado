import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { fetchRecords } from '../../utils/api';


const Candidates = () => {
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    const getCandidates = async () => {
      let candidates = await fetchRecords('Respuestas_Candidates');
      setCandidates(candidates.data.records);
    }
    getCandidates();
  }, []);

  console.log(candidates)

  return (
    <>
      {candidates && candidates.map(candidate => 
      <Wrapper>
        <Link href={`/candidates/${candidate.id}`}>
          <a>Go to candidatess/[candidate].js</a>
        </Link>
      </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`

`

export default Candidates;