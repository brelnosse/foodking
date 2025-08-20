import React from 'react';
import './style.css';
import { colors } from '../../utils/style/colors';

const Landing = () => {
  const featured = {
    title: 'Eru avec Fufu',
    steps_description: '',
    ingredients: ['Eru (feuilles)', 'Fufu (pâte de manioc/plantain)'],
    image_url: '',
    video_url: '',
    category: 'Fruits & Légumes'
  };

  return (
    <div className="landing-root">
      <header className="lk-header" style={{ background: colors.primary }}>
        <div className="lk-inner">
          <div className="logo">FoodKing</div>
          <nav className="main-nav">
            <a href="/">Accueil</a>
            <a href="/search">Rechercher</a>
            <a href="/admin">Admin</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="lk-inner hero-inner">
          <h1 className="hero-title">Bienvenue sur FoodKing</h1>
          <p className="hero-sub">Recettes authentiques, étapes claires et images inspirantes — tout en un seul endroit.</p>
          <a className="cta" href="/home">Commencer</a>
        </div>
      </section>

      <section className="featured">
        <div className="lk-inner">
          <h2>Recette mise en avant</h2>
          <article className="recipe-card">
            <div className="media">
              {featured.image_url ? (
                <img src={featured.image_url} alt={featured.title} />
              ) : (
                <div className="image-placeholder">Image non fournie</div>
              )}
              {featured.video_url ? (
                <a className="video-link" href={featured.video_url} target="_blank" rel="noreferrer">Voir la vidéo</a>
              ) : null}
            </div>

            <div className="content">
              <h3 className="recipe-title">{featured.title}</h3>
              <p className="recipe-category">{featured.category}</p>

              <h4>Ingrédients</h4>
              <ul className="ingredients">
                {featured.ingredients && featured.ingredients.length ? (
                  featured.ingredients.map((ing, i) => <li key={i}>{ing}</li>)
                ) : (
                  <li className="muted">Aucun ingrédient fourni</li>
                )}
              </ul>

              <h4>Étapes</h4>
              {featured.steps_description ? (
                <p className="steps">{featured.steps_description}</p>
              ) : (
                <p className="muted">Aucune description d'étapes fournie pour cette recette.</p>
              )}
            </div>
          </article>
        </div>
      </section>

      <footer className="lk-footer">
        <div className="lk-inner">
          <small>© {new Date().getFullYear()} FoodKing — Tous droits réservés</small>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
