import React from 'react';
import { Header } from '../components/Header/Header';
import { Promo } from '../components/Promo/Promo';
import { AboutProject } from '../components/AboutProject/AboutProject';
import { Techs } from '../components/Techs/Techs';
import { Student } from '../components/Students/Student';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Footer } from '../components/Footer/Footer';

export const Landing = () => (
  <>
    <Header />
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <Student />
      <Portfolio />
    </main>
    <Footer />
  </>
);
