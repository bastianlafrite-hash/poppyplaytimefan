'use strict';

/* ══════════════════════════════════════════════
   SYSTÈME DE TRADUCTION FR / EN
   Ajouter ce fichier AVANT la fermeture </body>
   et ajouter <script src="lang.js"></script>
══════════════════════════════════════════════ */

const TRANSLATIONS = {
  fr: {
    // NAV
    nav_home: 'Accueil',
    nav_chapters: 'Chapitres',
    nav_timeline: 'Timeline',
    nav_monsters: 'Monstres',
    nav_discord: 'Indisponible',

    // HERO
    hero_badge: 'PLAYTIME CO.',
    hero_tagline: 'where imagination never dies',
    hero_subtitle: "Bienvenue dans l'usine abandonnée de <em>Playtime Co.</em><br/>Les jouets vous attendent… ils ont <strong>faim</strong>.",
    hero_cta: 'Explorer l\'Univers',
    hero_warning: 'Âmes sensibles s\'abstenir',

    // CHAPTERS SECTION
    chapters_label: 'ARCHIVES SECRÈTES',
    chapters_title: 'Histoire des Chapitres',
    chapters_desc: "Chaque chapitre vous enfonce un peu plus dans les ténèbres de l'usine.<br/>Aucune sortie n'est garantie.",
    read_btn: 'Lire l\'histoire',

    // CHAPTER 1
    ch1_year: '2021',
    ch1_title: 'A Tight Squeeze',
    ch1_text: "Un ancien employé reçoit une mystérieuse VHS et s'infiltre dans l'usine de <strong>Playtime Co.</strong> Armé d'un GrabPack, il explore les couloirs rouillés jusqu'à ce que <strong>Huggy Wuggy</strong>, l'ancienne mascotte, se mette à le traquer sans relâche.",
    ch1_stamp: 'CLASSIFIÉ',

    // CHAPTER 2
    ch2_year: '2022',
    ch2_title: 'Fly in a Web',
    ch2_text: "La descente continue dans la <strong>Game Station</strong> souterraine. <strong>Mommy Long Legs</strong>, aux membres démesurés et au sourire glaçant, impose des épreuves sadiques. Perdre signifie mourir.",
    ch2_stamp: 'CLASSIFIÉ',

    // CHAPTER 3
    ch3_year: '2024',
    ch3_title: 'Deep Sleep',
    ch3_text: "Les profondeurs révèlent <strong>Playcare</strong>, un orphelinat souterrain. Un gaz rouge hallucinogène envahit les tunnels, diffusé par <strong>CatNap</strong>. La frontière entre rêve et réalité disparaît.",
    ch3_stamp: 'CLASSIFIÉ',

    // CHAPTER 4
    ch4_year: '2025',
    ch4_title: 'Safe Haven',
    ch4_text: "Un refuge apparent baptisé <strong>Safe Haven</strong> dissimule les expériences les plus troublantes. De nouveaux secrets révèlent l'ampleur des horreurs de Playtime Co. Le <strong>Prototype</strong> n'est plus une ombre.",
    ch4_stamp: 'CLASSIFIÉ',

    // CHAPTER 5
    ch5_year: '2026',
    ch5_title: 'Broken Things',
    ch5_coming_text: "Ce qui se cache dans l'obscurité<br/>attend son heure…",
    ch5_coming_badge: 'BIENTÔT DISPONIBLE',

    // MONSTERS SECTION
    monsters_label: 'DOSSIERS CONFIDENTIELS',
    monsters_title: 'Les Créatures de l\'Usine',
    ba_before: 'AVANT',
    ba_after: 'APRÈS',
    ba_exp_label: 'EXPÉRIENCE',
    pol_1_name: 'Poppy #1007',
    pol_2_name: 'Lilly #1468',
    img_coming: 'IMAGE À VENIR',
    img_coming_sub: '— Disponible bientôt —',

    // HUGGY
    huggy_name: 'Huggy Wuggy',
    huggy_exp: 'EXP. #1170',
    huggy_status: 'DANGEREUX',
    huggy_chapter: 'Chapitre 1',
    huggy_desc: "Mascotte de Playtime Co. depuis 1984, Huggy Wuggy fut transformé en gardien de sécurité dans le cadre de l'initiative <em>Bigger Bodies</em>. L'Expérience 1170 se tenait immobile dans le Hall d'entrée — jusqu'au jour où un intrus osa pénétrer dans l'usine.",
    stat_danger: 'Danger',
    huggy_s1: 'Danger', huggy_s2: 'Vitesse', huggy_s3: 'Résistance',

    // POPPY
    poppy_name: 'Poppy',
    poppy_exp: 'EST. 1950',
    poppy_status: 'INCONNUE',
    poppy_chapter: 'Chapitre 1 & +',
    poppy_desc: "Lancée en 1950, Poppy propulsa Playtime Co. au sommet. Bien plus qu'une poupée parlante — elle <em>écoutait</em>. Première création de l'entreprise, son origine véritable et ses capacités réelles demeurent classifiées. Alliée ou ennemie ? La réponse change à chaque chapitre.",
    poppy_s1: 'Mystère', poppy_s2: 'Influence', poppy_s3: 'Danger',

    // MOMMY
    mommy_name: 'Mommy Long Legs',
    mommy_exp: 'GAME STATION',
    mommy_status: 'DANGEREUX',
    mommy_chapter: 'Chapitre 2',
    mommy_desc: "Créée en 1991 pour exploiter le nouveau plastique élastique de Playtime Co., Mommy Long Legs régna sur la Game Station. Anciennement Marie Payne, l'Expérience 1222 peut étendre ses membres à des longueurs impossibles. Son sourire ne disparaît jamais. Même à la fin.",
    mommy_s1: 'Danger', mommy_s2: 'Élasticité', mommy_s3: 'Sadisme',

    // CATNAP
    catnap_name: 'CatNap',
    catnap_exp: 'SMILING CRITTERS',
    catnap_status: 'EXTRÊME',
    catnap_chapter: 'Chapitre 3',
    catnap_desc: "Lancé en 1989 dans la gamme Smiling Critters, CatNap est le fidèle serviteur du Prototype. Il diffuse un <strong>Gaz Rouge</strong> hallucinogène qui plonge ses victimes dans des cauchemars éveillés. Silencieux, patient, fanatique — il croit sincèrement accomplir une oeuvre divine.",
    catnap_s1: 'Danger', catnap_s2: 'Gaz Rouge', catnap_s3: 'Furtivité',

    // DOEY
    doey_name: 'Doey',
    doey_exp: 'FIN DES ANNÉES 50',
    doey_status: 'INSTABLE',
    doey_chapter: 'Chapitre 4',
    doey_desc: "Doey Dough, pâte à modeler lancée fin des années 1950, devint le second succès commercial de Playtime Co. après Poppy. La mascotte <strong>Doey the Doughman</strong> fut ensuite créée dans les années 80 avant qu'une expérience non documentée ne transforme irrémédiablement sa nature en quelque chose d'imprévisible.",
    doey_s1: 'Danger', doey_s2: 'Instabilité', doey_s3: 'Résistance',

    // PROTOTYPE
    proto_name: 'Le Prototype',
    proto_exp: 'EXP. #1006',
    proto_status: 'NIVEAU ROUGE',
    proto_chapter: 'Chapitre 1 & +',
    proto_tape: '⚠ ACCÈS RESTREINT — NIVEAU MAXIMUM ⚠',
    proto_desc: "La 1006e expérience — le premier exemple réussi du type créature que Playtime Co. cherchait à créer. Construit à partir de pièces organiques et mécaniques, il n'avait pas besoin de nourriture. Il montrait une nouvelle facette à chaque session. Les scientifiques voulaient sa destruction. <em>Ils n'ont jamais pu.</em>",
    proto_s1: 'Danger', proto_s2: 'Intelligence', proto_s3: 'Immortalité',

    // DISCORD
    discord_title: 'Communauté',
    discord_sub: "Discutez théories, fan-art et secrets de l'usine avec d'autres survivants.",
    discord_btn: 'Indisponible',
    discord_modal_tape: '⚠ TRANSMISSION INTERROMPUE ⚠',
    discord_modal_title: 'Serveur Indisponible',
    discord_modal_msg: "Le serveur Discord de la communauté<br/><strong>Poppy Playtime Fan Site</strong> est actuellement<br/>en cours de préparation.",
    discord_modal_progress: 'Préparation du serveur',
    discord_modal_soon: 'Revenez bientôt — les portes s\'ouvriront.',
    discord_modal_close: 'Compris',

    // MID BANNER
    mid_banner_quote: "Le jeu n'est pas terminé tant que nous ne le décidons pas.",
    mid_banner_attr: '— Playtime Co. Internal Memo, 1995',

    // FOOTER
    footer_nav_title: 'Navigation',
    footer_about_title: 'À Propos',
    footer_about_text: "Site fan non-officiel dédié à l'univers de <em>Poppy Playtime</em>, développé par <strong>BastianLaFrite</strong>. Tout droit venus de Belgique.",
    footer_copy: '© 2026 Poppy Playtime Fan Site',
    footer_dev: 'Fan-site indépendant',

    // LANG BUTTON
    lang_label: 'EN',
    lang_aria: 'Switch to English',
  },

  en: {
    // NAV
    nav_home: 'Home',
    nav_chapters: 'Chapters',
    nav_timeline: 'Timeline',
    nav_monsters: 'Monsters',
    nav_discord: 'Unavailable',

    // HERO
    hero_badge: 'PLAYTIME CO.',
    hero_tagline: 'where imagination never dies',
    hero_subtitle: "Welcome to the abandoned factory of <em>Playtime Co.</em><br/>The toys are waiting for you… they are <strong>hungry</strong>.",
    hero_cta: 'Explore the Universe',
    hero_warning: 'Faint-hearted, beware',

    // CHAPTERS SECTION
    chapters_label: 'SECRET ARCHIVES',
    chapters_title: 'Chapter History',
    chapters_desc: "Each chapter pulls you deeper into the factory's darkness.<br/>No exit is guaranteed.",
    read_btn: 'Read the story',

    // CHAPTER 1
    ch1_year: '2021',
    ch1_title: 'A Tight Squeeze',
    ch1_text: "A former employee receives a mysterious VHS tape and infiltrates the <strong>Playtime Co.</strong> factory. Armed with a GrabPack, they explore the rusted hallways until <strong>Huggy Wuggy</strong>, the former mascot, begins relentlessly hunting them down.",
    ch1_stamp: 'CLASSIFIED',

    // CHAPTER 2
    ch2_year: '2022',
    ch2_title: 'Fly in a Web',
    ch2_text: "The descent continues into the underground <strong>Game Station</strong>. <strong>Mommy Long Legs</strong>, with her oversized limbs and chilling smile, imposes sadistic trials. Losing means dying.",
    ch2_stamp: 'CLASSIFIED',

    // CHAPTER 3
    ch3_year: '2024',
    ch3_title: 'Deep Sleep',
    ch3_text: "The depths reveal <strong>Playcare</strong>, an underground orphanage. A hallucinogenic red gas floods the tunnels, dispersed by <strong>CatNap</strong>. The line between dream and reality disappears.",
    ch3_stamp: 'CLASSIFIED',

    // CHAPTER 4
    ch4_year: '2025',
    ch4_title: 'Safe Haven',
    ch4_text: "An apparent refuge called <strong>Safe Haven</strong> conceals the most disturbing experiments. New secrets reveal the full extent of Playtime Co.'s horrors. The <strong>Prototype</strong> is no longer a shadow.",
    ch4_stamp: 'CLASSIFIED',

    // CHAPTER 5
    ch5_year: '2026',
    ch5_title: 'Broken Things',
    ch5_coming_text: "What hides in the darkness<br/>waits for its time…",
    ch5_coming_badge: 'COMING SOON',

    // MONSTERS SECTION
    monsters_label: 'CONFIDENTIAL FILES',
    monsters_title: 'Factory Creatures',
    ba_before: 'BEFORE',
    ba_after: 'AFTER',
    ba_exp_label: 'EXPERIMENT',
    pol_1_name: 'Poppy #1007',
    pol_2_name: 'Lilly #1468',
    img_coming: 'IMAGE COMING SOON',
    img_coming_sub: '— Available soon —',

    // HUGGY
    huggy_name: 'Huggy Wuggy',
    huggy_exp: 'EXP. #1170',
    huggy_status: 'DANGEROUS',
    huggy_chapter: 'Chapter 1',
    huggy_desc: "Playtime Co.'s mascot since 1984, Huggy Wuggy was transformed into a security guard under the <em>Bigger Bodies</em> initiative. Experiment 1170 stood motionless in the Entry Hall — until the day an intruder dared enter the factory.",
    huggy_s1: 'Danger', huggy_s2: 'Speed', huggy_s3: 'Resistance',

    // POPPY
    poppy_name: 'Poppy',
    poppy_exp: 'EST. 1950',
    poppy_status: 'UNKNOWN',
    poppy_chapter: 'Chapter 1 & +',
    poppy_desc: "Launched in 1950, Poppy propelled Playtime Co. to the top. Far more than a talking doll — she <em>listened</em>. The company's very first creation, her true origin and real abilities remain classified. Ally or enemy? The answer shifts with every chapter.",
    poppy_s1: 'Mystery', poppy_s2: 'Influence', poppy_s3: 'Danger',

    // MOMMY
    mommy_name: 'Mommy Long Legs',
    mommy_exp: 'GAME STATION',
    mommy_status: 'DANGEROUS',
    mommy_chapter: 'Chapter 2',
    mommy_desc: "Created in 1991 to exploit Playtime Co.'s new elastic plastic, Mommy Long Legs ruled the Game Station. Formerly Marie Payne, Experiment 1222 can stretch her limbs to impossible lengths. Her smile never fades. Even at the end.",
    mommy_s1: 'Danger', mommy_s2: 'Elasticity', mommy_s3: 'Sadism',

    // CATNAP
    catnap_name: 'CatNap',
    catnap_exp: 'SMILING CRITTERS',
    catnap_status: 'EXTREME',
    catnap_chapter: 'Chapter 3',
    catnap_desc: "Launched in 1989 in the Smiling Critters line, CatNap is the Prototype's faithful servant. It disperses a hallucinogenic <strong>Red Gas</strong> that plunges victims into waking nightmares. Silent, patient, fanatical — it sincerely believes it is fulfilling a divine mission.",
    catnap_s1: 'Danger', catnap_s2: 'Red Gas', catnap_s3: 'Stealth',

    // DOEY
    doey_name: 'Doey',
    doey_exp: 'LATE 1950s',
    doey_status: 'UNSTABLE',
    doey_chapter: 'Chapter 4',
    doey_desc: "Doey Dough, modelling clay launched in the late 1950s, became Playtime Co.'s second commercial success after Poppy. The <strong>Doey the Doughman</strong> mascot was later created in the '80s before an undocumented experiment irrevocably transformed its nature into something unpredictable.",
    doey_s1: 'Danger', doey_s2: 'Instability', doey_s3: 'Resistance',

    // PROTOTYPE
    proto_name: 'The Prototype',
    proto_exp: 'EXP. #1006',
    proto_status: 'RED LEVEL',
    proto_chapter: 'Chapter 1 & +',
    proto_tape: '⚠ RESTRICTED ACCESS — MAXIMUM LEVEL ⚠',
    proto_desc: "The 1006th experiment — the first successful example of the creature type Playtime Co. sought to create. Built from organic and mechanical parts, it required no food. It revealed a new facet each session. Scientists wanted it destroyed. <em>They never could.</em>",
    proto_s1: 'Danger', proto_s2: 'Intelligence', proto_s3: 'Immortality',

    // DISCORD
    discord_title: 'Community',
    discord_sub: "Discuss theories, fan-art and factory secrets with other survivors.",
    discord_btn: 'Unavailable',
    discord_modal_tape: '⚠ TRANSMISSION INTERRUPTED ⚠',
    discord_modal_title: 'Server Unavailable',
    discord_modal_msg: "The <strong>Poppy Playtime Fan Site</strong><br/>Discord community server<br/>is currently being set up.",
    discord_modal_progress: 'Server preparation',
    discord_modal_soon: 'Come back soon — the doors will open.',
    discord_modal_close: 'Got it',

    // MID BANNER
    mid_banner_quote: "The game is not over until we decide it is.",
    mid_banner_attr: '— Playtime Co. Internal Memo, 1995',

    // FOOTER
    footer_nav_title: 'Navigation',
    footer_about_title: 'About',
    footer_about_text: "Unofficial fan site dedicated to the <em>Poppy Playtime</em> universe, developed by <strong>BastianLaFrite</strong>. All the way from Belgium.",
    footer_copy: '© 2026 Poppy Playtime Fan Site',
    footer_dev: 'Independent fan-site',

    // LANG BUTTON
    lang_label: 'FR',
    lang_aria: 'Passer en français',
  }
};

/* ── SYSTÈME PRINCIPAL ──────────────────────────── */
function initLanguageSwitcher() {
  let currentLang = localStorage.getItem('pp_lang') || 'fr';

  /* ── INJECTION CSS ───────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    /* ── Conteneur principal ── */
    #lang-widget {
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      z-index: 9000;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      cursor: none;
    }

    /* ── Étiquette au-dessus ── */
    #lang-widget .lw-label {
      font-family: 'Special Elite', serif;
      font-size: .42rem;
      letter-spacing: .4em;
      text-transform: uppercase;
      color: rgba(200, 167, 64, .35);
      padding: 0 .3rem .25rem .3rem;
      display: flex;
      align-items: center;
      gap: .4rem;
      white-space: nowrap;
      user-select: none;
    }
    #lang-widget .lw-label::before,
    #lang-widget .lw-label::after {
      content: '';
      display: inline-block;
      width: 12px;
      height: 1px;
      background: rgba(200, 167, 64, .25);
    }

    /* ── Corps du toggle ── */
    #lang-toggle {
      position: relative;
      display: flex;
      align-items: stretch;
      background: rgba(6, 3, 12, .96);
      border: 1px solid rgba(200, 167, 64, .28);
      clip-path: polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%);
      backdrop-filter: blur(16px);
      overflow: hidden;
      transition: border-color .4s, box-shadow .4s;
      box-shadow: 0 4px 24px rgba(0,0,0,.6), inset 0 1px 0 rgba(200,167,64,.06);
    }
    #lang-toggle:hover {
      border-color: rgba(200, 167, 64, .55);
      box-shadow: 0 6px 36px rgba(0,0,0,.7), 0 0 20px rgba(200,167,64,.1), inset 0 1px 0 rgba(200,167,64,.1);
    }

    /* ── Curseur glissant (fond actif) ── */
    #lang-toggle .lt-slider {
      position: absolute;
      top: 0; bottom: 0;
      width: 50%;
      background: linear-gradient(135deg, rgba(200,167,64,.18) 0%, rgba(200,167,64,.08) 100%);
      border-right: 1px solid rgba(200,167,64,.3);
      transition: transform .38s cubic-bezier(.23,1,.32,1);
      will-change: transform;
      z-index: 0;
    }
    #lang-toggle .lt-slider::after {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, transparent, rgba(200,167,64,.7) 40%, rgba(200,167,64,.7) 60%, transparent);
      box-shadow: 0 0 8px rgba(200,167,64,.5);
    }
    #lang-toggle.lang-en .lt-slider {
      transform: translateX(100%);
      border-right: none;
      border-left: 1px solid rgba(200,167,64,.3);
    }
    #lang-toggle.lang-en .lt-slider::after {
      right: auto;
      left: 0;
    }

    /* ── Scanline animée ── */
    #lang-toggle::before {
      content: '';
      position: absolute;
      left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(200,167,64,.4), transparent);
      animation: lt-scan 4s linear infinite;
      pointer-events: none;
      z-index: 3;
    }
    @keyframes lt-scan {
      0%   { top: -2px; opacity: 0; }
      5%   { opacity: .7; }
      95%  { opacity: .7; }
      100% { top: calc(100% + 2px); opacity: 0; }
    }

    /* ── Coins décoratifs ── */
    #lang-toggle .lt-corner {
      position: absolute;
      width: 6px; height: 6px;
      border-color: rgba(200,167,64,.4);
      border-style: solid;
      z-index: 4;
      pointer-events: none;
      transition: border-color .4s;
    }
    #lang-toggle:hover .lt-corner { border-color: rgba(200,167,64,.75); }
    #lang-toggle .lt-corner.tl { top: 3px; left: 3px; border-width: 1px 0 0 1px; }
    #lang-toggle .lt-corner.tr { top: 3px; right: 3px; border-width: 1px 1px 0 0; }
    #lang-toggle .lt-corner.bl { bottom: 3px; left: 3px; border-width: 0 0 1px 1px; }
    #lang-toggle .lt-corner.br { bottom: 3px; right: 3px; border-width: 0 1px 1px 0; }

    /* ── Chaque option de langue ── */
    #lang-toggle .lt-option {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .18rem;
      padding: .6rem .95rem;
      min-width: 64px;
      transition: color .3s;
      user-select: none;
    }

    /* ── Drapeau ── */
    #lang-toggle .lt-option .lt-flag {
      font-size: 1rem;
      line-height: 1;
      transition: transform .3s, filter .3s;
      filter: saturate(.5) brightness(.75);
    }
    #lang-toggle .lt-option.active .lt-flag {
      filter: saturate(1) brightness(1);
      transform: scale(1.12);
    }

    /* ── Code langue ── */
    #lang-toggle .lt-option .lt-code {
      font-family: 'Oswald', sans-serif;
      font-size: .52rem;
      font-weight: 700;
      letter-spacing: .28em;
      text-transform: uppercase;
      transition: color .3s, text-shadow .3s;
      color: rgba(160, 140, 100, .45);
    }
    #lang-toggle .lt-option.active .lt-code {
      color: rgba(200, 167, 64, .95);
      text-shadow: 0 0 12px rgba(200,167,64,.5);
    }

    /* ── Séparateur central ── */
    #lang-toggle .lt-sep {
      position: relative;
      z-index: 2;
      width: 1px;
      background: rgba(200,167,64,.1);
      align-self: stretch;
      flex-shrink: 0;
    }

    /* ── Effet glitch au switch ── */
    @keyframes lt-glitch-in {
      0%   { clip-path: polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%); transform: skewX(0deg); }
      15%  { clip-path: polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%); transform: skewX(-4deg) scaleX(.98); }
      30%  { clip-path: polygon(0 22%,100% 22%,100% 28%,0 28%); transform: skewX(3deg); }
      45%  { clip-path: polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%); transform: skewX(-1deg); }
      60%  { clip-path: polygon(0 58%,100% 58%,100% 68%,0 68%); transform: skewX(2deg); }
      80%  { clip-path: polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%); transform: skewX(0deg) scaleX(1.01); }
      100% { clip-path: polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%); transform: skewX(0deg) scaleX(1); }
    }
    #lang-toggle.glitching {
      animation: lt-glitch-in .45s steps(1) forwards;
    }

    /* ── Flash rouge au clic ── */
    #lang-toggle .lt-flash {
      position: absolute;
      inset: 0;
      background: rgba(192, 57, 43, .18);
      z-index: 5;
      pointer-events: none;
      opacity: 0;
      transition: opacity .08s;
    }
    #lang-toggle.flash-on .lt-flash {
      opacity: 1;
    }

    /* ── Étiquette EXP. dessous ── */
    #lang-widget .lw-exp {
      font-family: 'Special Elite', serif;
      font-size: .38rem;
      letter-spacing: .35em;
      text-transform: uppercase;
      color: rgba(139, 0, 0, .3);
      padding: .2rem .3rem 0;
      white-space: nowrap;
      user-select: none;
    }

    /* ── Transition page ── */
    body.lang-transitioning * {
      transition: opacity .15s ease !important;
      opacity: .25 !important;
    }
    body.lang-transitioning #lang-widget {
      opacity: 1 !important;
    }
    body.lang-transitioning #lang-widget * {
      opacity: 1 !important;
    }
  `;
  document.head.appendChild(style);

  /* ── HTML DU WIDGET ──────────────────────────────── */
  const widget = document.createElement('div');
  widget.id = 'lang-widget';
  widget.innerHTML = `
    <div class="lw-label">LANGUE</div>
    <div id="lang-toggle" class="lang-${currentLang}">
      <div class="lt-slider"></div>
      <div class="lt-flash"></div>
      <div class="lt-corner tl"></div>
      <div class="lt-corner tr"></div>
      <div class="lt-corner bl"></div>
      <div class="lt-corner br"></div>

      <div class="lt-option ${currentLang === 'fr' ? 'active' : ''}" data-lang="fr">
        <span class="lt-flag">🇫🇷</span>
        <span class="lt-code">FR</span>
      </div>
      <div class="lt-sep"></div>
      <div class="lt-option ${currentLang === 'en' ? 'active' : ''}" data-lang="en">
        <span class="lt-flag">🇬🇧</span>
        <span class="lt-code">EN</span>
      </div>
    </div>
    <div class="lw-exp">PLAYTIME CO. · LANG PROTOCOL</div>
  `;
  document.body.appendChild(widget);

  /* ── INTERACTION ─────────────────────────────────── */
  const toggle = document.getElementById('lang-toggle');
  const options = toggle.querySelectorAll('.lt-option');

  function switchLang(newLang) {
    if (newLang === currentLang) return;
    currentLang = newLang;
    localStorage.setItem('pp_lang', currentLang);

    // Mettre à jour classes actives
    options.forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });
    toggle.className = `lang-${currentLang}`;

    // Flash rouge + glitch
    toggle.classList.add('flash-on');
    setTimeout(() => toggle.classList.remove('flash-on'), 80);
    setTimeout(() => {
      toggle.classList.add('glitching');
      setTimeout(() => toggle.classList.remove('glitching'), 460);
    }, 40);

    // Appliquer la langue
    applyLanguage(currentLang, true);
  }

  options.forEach(opt => {
    opt.addEventListener('click', () => switchLang(opt.dataset.lang));
  });

  // Appliquer la langue sauvegardée au chargement
  applyLanguage(currentLang, false);
}

/* ── APPLICATION DES TEXTES ─────────────────────── */
function applyLanguage(lang, animate) {
  const t = TRANSLATIONS[lang];
  if (animate) {
    document.body.classList.add('lang-transitioning');
    setTimeout(() => {
      updateTexts(t, lang);
      document.body.classList.remove('lang-transitioning');
    }, 150);
  } else {
    updateTexts(t, lang);
  }
}

function updateTexts(t, lang) {
  // Le widget se met à jour via switchLang() directement

  // Helper pour mettre à jour par sélecteur
  const set = (sel, html, useInner = true) => {
    const el = document.querySelector(sel);
    if (el) { if (useInner) el.innerHTML = html; else el.textContent = html; }
  };
  const setAll = (sel, html) => {
    document.querySelectorAll(sel).forEach(el => el.innerHTML = html);
  };

  // ── NAV ──────────────────────────────────────────
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const navHrefs = ['#hero','#chapters','#timeline','#monsters'];
  const navKeys  = ['nav_home','nav_chapters','nav_timeline','nav_monsters'];
  navLinks.forEach(a => {
    const idx = navHrefs.indexOf(a.getAttribute('href'));
    if (idx >= 0) a.textContent = t[navKeys[idx]];
  });
  // Discord nav links
  document.querySelectorAll('.nav-discord').forEach(el => {
    // Garder le SVG + le dot, remplacer seulement le texte final
    const lastText = el.childNodes[el.childNodes.length - 1];
    if (lastText && lastText.nodeType === Node.TEXT_NODE) {
      lastText.textContent = t.nav_discord;
    }
  });

  // ── HERO ─────────────────────────────────────────
  set('.badge-name', t.hero_badge, false);
  set('.badge-tagline', t.hero_tagline, false);
  const heroSub = document.querySelector('.hero-subtitle');
  if (heroSub) heroSub.innerHTML = t.hero_subtitle;
  const btnText = document.querySelector('.btn-text');
  if (btnText) btnText.textContent = t.hero_cta;
  const warnBadge = document.querySelector('.warning-badge');
  if (warnBadge) {
    const span = warnBadge.querySelectorAll('span')[1];
    if (span) span.textContent = t.hero_warning;
  }

  // ── SECTIONS LABELS ───────────────────────────────
  const labels = document.querySelectorAll('.section-label');
  const titles = document.querySelectorAll('.section-title');
  const descs  = document.querySelectorAll('.section-desc');
  // Chapters section
  const chapSec = document.getElementById('chapters');
  if (chapSec) {
    const lbl = chapSec.querySelector('.section-label');
    const ttl = chapSec.querySelector('.section-title');
    const dsc = chapSec.querySelector('.section-desc');
    if (lbl) lbl.textContent = t.chapters_label;
    if (ttl) ttl.textContent = t.chapters_title;
    if (dsc) dsc.innerHTML  = t.chapters_desc;
  }

  // ── CHAPTER CARDS ─────────────────────────────────
  const cards = document.querySelectorAll('.chapter-card[data-chapter]');
  const chData = [
    { year: t.ch1_year, title: t.ch1_title, text: t.ch1_text, stamp: t.ch1_stamp, tags: ['Huggy Wuggy','GrabPack','Playtime Co.'] },
    { year: t.ch2_year, title: t.ch2_title, text: t.ch2_text, stamp: t.ch2_stamp, tags: ['Mommy Long Legs','Game Station', lang==='fr'?'Jeux Mortels':'Death Games'] },
    { year: t.ch3_year, title: t.ch3_title, text: t.ch3_text, stamp: t.ch3_stamp, tags: ['CatNap','Playcare', lang==='fr'?'Gaz Rouge':'Red Gas'] },
    { year: t.ch4_year, title: t.ch4_title, text: t.ch4_text, stamp: t.ch4_stamp, tags: ['Safe Haven','Doey', lang==='fr'?'Le Prototype':'The Prototype'] },
  ];
  cards.forEach((card, i) => {
    const d = chData[i]; if (!d) return;
    const yearEl  = card.querySelector('.chapter-year');
    const titleEl = card.querySelector('.chapter-title');
    const textEl  = card.querySelector('.chapter-text');
    const stampEl = card.querySelector('.chapter-stamp');
    const readBtn = card.querySelector('.chapter-read-btn');
    if (yearEl)  yearEl.textContent   = d.year;
    if (titleEl) titleEl.textContent  = d.title;
    if (textEl)  textEl.innerHTML     = d.text;
    if (stampEl) stampEl.textContent  = d.stamp;
    if (readBtn) {
      // Garder le SVG, remplacer le texte
      readBtn.childNodes[0].textContent = t.read_btn + ' ';
    }
    // Tags
    const tagsEl = card.querySelector('.chapter-tags');
    if (tagsEl) tagsEl.innerHTML = d.tags.map(tg => `<span class="tag">${tg}</span>`).join('');
  });

  // Chapter 5 coming soon
  const ch5 = document.querySelector('.chapter-coming');
  if (ch5) {
    const ct = ch5.querySelector('.coming-text');
    const cb = ch5.querySelector('.coming-badge');
    const cy = ch5.querySelector('.chapter-year');
    const ctt = ch5.querySelector('.chapter-title');
    if (cy)  cy.textContent  = t.ch5_year;
    if (ctt) ctt.textContent = t.ch5_title;
    if (ct)  ct.innerHTML    = t.ch5_coming_text;
    if (cb)  cb.textContent  = t.ch5_coming_badge;
  }

  // ── MONSTERS SECTION ──────────────────────────────
  const monSec = document.getElementById('monsters');
  if (monSec) {
    const lbl = monSec.querySelector('.monsters-header .section-label');
    const ttl = monSec.querySelector('.monsters-header .section-title');
    if (lbl) lbl.textContent = t.monsters_label;
    if (ttl) ttl.textContent = t.monsters_title;

    // Before/After
    const stamps = monSec.querySelectorAll('.ba-stamp-tag');
    if (stamps[0]) stamps[0].textContent = t.ba_before;
    if (stamps[1]) stamps[1].textContent = t.ba_after;
    const expLabel = monSec.querySelector('.bta-label-top');
    if (expLabel) expLabel.textContent = t.ba_exp_label;

    // Polaroid metas
    const polMetas = monSec.querySelectorAll('.pol-meta span:first-child');
    if (polMetas[0]) polMetas[0].textContent = t.pol_1_name;
    if (polMetas[1]) polMetas[1].textContent = t.pol_2_name;

    // Image placeholders
    monSec.querySelectorAll('.cs-label').forEach(el => {
      const spanEl = el.querySelector('span');
      el.childNodes[0].textContent = t.img_coming;
      if (spanEl) spanEl.textContent = t.img_coming_sub;
    });
  }

  // Monster cards data
  const monsterData = [
    { name: t.huggy_name, exp: t.huggy_exp, status: t.huggy_status, chapter: t.huggy_chapter, desc: t.huggy_desc, stats: [t.huggy_s1, t.huggy_s2, t.huggy_s3] },
    { name: t.poppy_name, exp: t.poppy_exp, status: t.poppy_status, chapter: t.poppy_chapter, desc: t.poppy_desc, stats: [t.poppy_s1, t.poppy_s2, t.poppy_s3] },
    { name: t.mommy_name, exp: t.mommy_exp, status: t.mommy_status, chapter: t.mommy_chapter, desc: t.mommy_desc, stats: [t.mommy_s1, t.mommy_s2, t.mommy_s3] },
    { name: t.catnap_name, exp: t.catnap_exp, status: t.catnap_status, chapter: t.catnap_chapter, desc: t.catnap_desc, stats: [t.catnap_s1, t.catnap_s2, t.catnap_s3] },
    { name: t.doey_name, exp: t.doey_exp, status: t.doey_status, chapter: t.doey_chapter, desc: t.doey_desc, stats: [t.doey_s1, t.doey_s2, t.doey_s3] },
    { name: t.proto_name, exp: t.proto_exp, status: t.proto_status, chapter: t.proto_chapter, desc: t.proto_desc, stats: [t.proto_s1, t.proto_s2, t.proto_s3], tape: t.proto_tape },
  ];

  const mCards = document.querySelectorAll('.monster-card');
  mCards.forEach((card, i) => {
    const d = monsterData[i]; if (!d) return;
    const nameEl    = card.querySelector('.monster-name');
    const expEl     = card.querySelector('.monster-exp-tag');
    const statusEl  = card.querySelector('.monster-status');
    const chBadge   = card.querySelector('.monster-chapter-badge');
    const descEl    = card.querySelector('.monster-desc');
    const statLbls  = card.querySelectorAll('.stat-label');
    const tapeEl    = card.querySelector('.proto-classified-tape');

    if (nameEl)   nameEl.textContent   = d.name;
    if (expEl)    expEl.textContent    = d.exp;
    if (statusEl) statusEl.textContent = d.status;
    if (chBadge)  chBadge.innerHTML    = d.chapter;
    if (descEl)   descEl.innerHTML     = d.desc;
    if (tapeEl)   tapeEl.textContent   = d.tape;
    statLbls.forEach((lbl, j) => { if (d.stats[j]) lbl.textContent = d.stats[j]; });
  });

  // ── DISCORD BANNER ────────────────────────────────
  const discBannerTitle = document.querySelector('.discord-banner-title');
  const discBannerSub   = document.querySelector('.discord-banner-sub');
  if (discBannerTitle) {
    // Garder le span BIENTÔT
    const span = discBannerTitle.querySelector('.unavail-tag');
    discBannerTitle.textContent = t.discord_title + ' ';
    if (span) discBannerTitle.appendChild(span);
  }
  if (discBannerSub) discBannerSub.textContent = t.discord_sub;

  // Tous les boutons discord "Indisponible"
  document.querySelectorAll('.discord-trigger, .btn-discord, .discord-banner-btn, .footer-discord-link').forEach(el => {
    const lastNode = el.lastChild;
    if (lastNode && lastNode.nodeType === Node.TEXT_NODE) {
      lastNode.textContent = t.nav_discord;
    }
  });

  // ── DISCORD MODAL ─────────────────────────────────
  const modal = document.getElementById('discord-modal');
  if (modal) {
    const tape  = modal.querySelector('.dsc-tape');
    const title = modal.querySelector('.dsc-title');
    const msg   = modal.querySelector('.dsc-msg');
    const progLbl = modal.querySelector('.dsc-progress-label span:first-child');
    const soon  = modal.querySelector('.dsc-soon');
    const closeText = modal.querySelector('.dsc-close-text');
    if (tape)     tape.textContent     = t.discord_modal_tape;
    if (title)    title.textContent    = t.discord_modal_title;
    if (msg)      msg.innerHTML        = t.discord_modal_msg;
    if (progLbl)  progLbl.textContent  = t.discord_modal_progress;
    if (soon)     soon.textContent     = t.discord_modal_soon;
    if (closeText) closeText.textContent = t.discord_modal_close;
  }

  // ── MID BANNER ────────────────────────────────────
  const midText = document.querySelector('.mid-banner-text');
  const midAttr = document.querySelector('.mid-banner-attr');
  if (midText) {
    midText.innerHTML = `<span>"</span><em>${t.mid_banner_quote}</em><span>"</span>`;
  }
  if (midAttr) midAttr.textContent = t.mid_banner_attr;

  // ── FOOTER ───────────────────────────────────────
  const footerLinks  = document.querySelector('.footer-links h4');
  const footerAbout  = document.querySelector('.footer-info h4');
  const footerAboutP = document.querySelector('.footer-info p');
  const footerCopy   = document.querySelector('.footer-bottom-inner span:first-child');
  const footerDev    = document.querySelector('.footer-bottom-inner span:last-child');
  if (footerLinks)  footerLinks.textContent  = t.footer_nav_title;
  if (footerAbout)  footerAbout.textContent  = t.footer_about_title;
  if (footerAboutP) footerAboutP.innerHTML   = t.footer_about_text;
  if (footerCopy)   footerCopy.textContent   = t.footer_copy;
  if (footerDev)    footerDev.textContent    = t.footer_dev;

  // Footer nav links
  const footerNavLinks = document.querySelectorAll('.footer-links a[href^="#"]');
  footerNavLinks.forEach(a => {
    const href = a.getAttribute('href');
    const map = { '#hero': t.nav_home, '#chapters': t.nav_chapters, '#monsters': t.nav_monsters };
    if (map[href]) a.textContent = map[href];
  });

  // ── TIMELINE ─────────────────────────────────────
  updateTimeline(lang, t);

  // ── CHAPITRE PANEL DATA ───────────────────────────
  updateChapData(lang, t);

  // ── HTML LANG ATTR ────────────────────────────────
  document.documentElement.lang = lang;
}

/* ── MISE À JOUR TIMELINE ─────────────────────────── */
function updateTimeline(lang, t) {
  const tlData = {
    fr: [
      { year:'1950', cat:'founding', title:'Naissance de Playtime Co.',           desc:'Eliot Ludwig fonde Playtime Co. et lance sa première création : <strong>Poppy</strong>, une poupée qui écoute vraiment. Le succès est immédiat et mondial.' },
      { year:'1955', cat:'product',  title:'Lancement de Doey Dough',              desc:'La pâte à modeler <strong>Doey Dough</strong> devient le deuxième grand succès de l\'entreprise.' },
      { year:'1960', cat:'expansion',title:'Construction de l\'usine principale',  desc:'Face à la demande croissante, Playtime Co. construit son <strong>usine principale</strong>, un complexe titanesque.' },
      { year:'1984', cat:'product',  title:'Huggy Wuggy arrive',                   desc:'<strong>Huggy Wuggy</strong> est lancé et devient instantanément la mascotte de Playtime Co. Sa vraie nature reste secrète.' },
      { year:'1986', cat:'dark',     title:'Projet Bigger Bodies — Phase 1',       desc:'Lancement du projet classifié <strong>Bigger Bodies Initiative</strong>. Les premiers "volontaires" disparaissent.' },
      { year:'1988', cat:'dark',     title:'Expérience 1006 — Le Prototype',       desc:'Le <strong>Prototype</strong> est créé. Les scientifiques demandent sa destruction. La direction refuse.' },
      { year:'1989', cat:'product',  title:'Smiling Critters',                     desc:'Lancement de la gamme <strong>Smiling Critters</strong>. Adorables en apparence, sujets d\'expérimentation en coulisses.' },
      { year:'1990', cat:'dark',     title:'Expérience 1170 — Huggy Wuggy',       desc:'L\'<strong>Expérience 1170</strong> est installée dans le Hall de l\'usine comme gardien de sécurité.' },
      { year:'1991', cat:'product',  title:'Mommy Long Legs — Expérience 1222',   desc:'Marie Payne devient <strong>Mommy Long Legs</strong>, assignée à la Game Station souterraine.' },
      { year:'1992', cat:'dark',     title:'Ouverture de Playcare',                desc:'L\'orphelinat souterrain <strong>Playcare</strong> ouvre. En réalité : terrain d\'expérimentation à grande échelle.' },
      { year:'1995', cat:'collapse', title:'La Nuit de la Disparition',            desc:'En une seule nuit, <strong>tous les employés disparaissent</strong>. L\'usine est retrouvée vide.' },
      { year:'2021', cat:'game',     title:'Chapitre 1 — A Tight Squeeze',        desc:'Un ancien employé retourne dans l\'usine. Huggy Wuggy est vivant. Poppy est libérée.' },
      { year:'2023', cat:'game',     title:'Chapitre 2 — Fly in a Web',           desc:'La Game Station. Mommy Long Legs impose ses jeux mortels. Le Prototype se manifeste.' },
      { year:'2024', cat:'game',     title:'Chapitre 3 — Deep Sleep',             desc:'Playcare et le Gaz Rouge. CatNap veille sur son dieu. La chapelle tombe.' },
      { year:'2025', cat:'game',     title:'Chapitre 4 — Safe Haven',             desc:'Safe Haven n\'est pas un refuge. Doey rôde. Le Prototype n\'est plus dans l\'ombre.' },
      { year:'2026', cat:'soon',     title:'Chapitre 5 — Broken Things',          desc:'<em>Ce qui se cache dans l\'obscurité attend son heure…</em>' },
    ],
    en: [
      { year:'1950', cat:'founding', title:'Birth of Playtime Co.',                desc:'Eliot Ludwig founds Playtime Co. and launches his first creation: <strong>Poppy</strong>, a doll that truly listens. Worldwide success is immediate.' },
      { year:'1955', cat:'product',  title:'Doey Dough Launch',                   desc:'The modelling clay <strong>Doey Dough</strong> becomes the company\'s second major success.' },
      { year:'1960', cat:'expansion',title:'Main Factory Construction',            desc:'Facing growing demand, Playtime Co. builds its <strong>main factory</strong>, a titanic complex.' },
      { year:'1984', cat:'product',  title:'Huggy Wuggy Arrives',                 desc:'<strong>Huggy Wuggy</strong> launches and instantly becomes Playtime Co.\'s mascot. Its true nature remains secret.' },
      { year:'1986', cat:'dark',     title:'Bigger Bodies Project — Phase 1',     desc:'Launch of the classified <strong>Bigger Bodies Initiative</strong>. The first "volunteers" disappear.' },
      { year:'1988', cat:'dark',     title:'Experiment 1006 — The Prototype',     desc:'The <strong>Prototype</strong> is created. Scientists demand its destruction. Management refuses.' },
      { year:'1989', cat:'product',  title:'Smiling Critters',                    desc:'Launch of the <strong>Smiling Critters</strong> line. Adorable on the surface, experimental subjects behind the scenes.' },
      { year:'1990', cat:'dark',     title:'Experiment 1170 — Huggy Wuggy',      desc:'<strong>Experiment 1170</strong> is installed in the factory Hall as a security guard.' },
      { year:'1991', cat:'product',  title:'Mommy Long Legs — Experiment 1222',  desc:'Marie Payne becomes <strong>Mommy Long Legs</strong>, assigned to the underground Game Station.' },
      { year:'1992', cat:'dark',     title:'Playcare Opens',                       desc:'The underground orphanage <strong>Playcare</strong> opens. In reality: a large-scale experimentation ground.' },
      { year:'1995', cat:'collapse', title:'The Night of Disappearance',           desc:'In a single night, <strong>all employees vanish</strong>. The factory is found empty.' },
      { year:'2021', cat:'game',     title:'Chapter 1 — A Tight Squeeze',         desc:'A former employee returns to the factory. Huggy Wuggy is alive. Poppy is freed.' },
      { year:'2023', cat:'game',     title:'Chapter 2 — Fly in a Web',            desc:'The Game Station. Mommy Long Legs imposes her deadly games. The Prototype manifests.' },
      { year:'2024', cat:'game',     title:'Chapter 3 — Deep Sleep',              desc:'Playcare and the Red Gas. CatNap watches over its god. The chapel falls.' },
      { year:'2025', cat:'game',     title:'Chapter 4 — Safe Haven',              desc:'Safe Haven is no refuge. Doey lurks. The Prototype is no longer in the shadows.' },
      { year:'2026', cat:'soon',     title:'Chapter 5 — Broken Things',           desc:'<em>What hides in the darkness waits for its time…</em>' },
    ]
  };

  const catLabels = {
    fr: { founding:'Fondation', product:'Produit', expansion:'Expansion', dark:'Classifié', collapse:'Effondrement', game:'Jeu', soon:'Bientôt' },
    en: { founding:'Founding',  product:'Product', expansion:'Expansion', dark:'Classified', collapse:'Collapse',     game:'Game', soon:'Soon' }
  };

  const tlSection = document.getElementById('timeline');
  if (!tlSection) return;

  // Section header
  const tlLabel = tlSection.querySelector('.section-label');
  const tlTitle = tlSection.querySelector('.section-title');
  const tlDesc  = tlSection.querySelector('.section-desc');
  if (tlLabel) tlLabel.textContent = lang === 'fr' ? 'CHRONOLOGIE CONFIDENTIELLE' : 'CONFIDENTIAL TIMELINE';
  if (tlTitle) tlTitle.textContent = lang === 'fr' ? "L'Histoire de Playtime Co." : 'The History of Playtime Co.';
  if (tlDesc)  tlDesc.innerHTML    = lang === 'fr'
    ? 'De la naissance d\'un empire du jouet à l\'abîme industriel.<br/>Chaque date cache une vérité.'
    : 'From the birth of a toy empire to the industrial abyss.<br/>Every date hides a truth.';

  // Legend
  const legendItems = tlSection.querySelectorAll('.tl-legend-item');
  const cats = ['founding','product','expansion','dark','collapse','game','soon'];
  legendItems.forEach((item, i) => {
    if (cats[i] && catLabels[lang][cats[i]]) {
      // garder le dot, remplacer le texte
      const dot = item.querySelector('.tl-legend-dot');
      item.textContent = catLabels[lang][cats[i]];
      if (dot) item.prepend(dot);
    }
  });

  // Timeline items
  const tlItems = tlSection.querySelectorAll('.tl-item');
  const data = tlData[lang];
  tlItems.forEach((item, i) => {
    const d = data[i]; if (!d) return;
    const yearEl  = item.querySelector('.tl-card-year');
    const catEl   = item.querySelector('.tl-card-cat');
    const titleEl = item.querySelector('.tl-card-title');
    const descEl  = item.querySelector('.tl-card-desc');
    if (yearEl)  yearEl.textContent  = d.year;
    if (catEl)   catEl.textContent   = catLabels[lang][d.cat] || d.cat;
    if (titleEl) titleEl.textContent = d.title;
    if (descEl)  descEl.innerHTML    = d.desc;
  });
}

/* ── MISE À JOUR DONNÉES CHAPITRES (PANEL) ─────────── */
function updateChapData(lang, t) {
  // Ces données sont utilisées par openChapPanel() dans index.html
  // On met à jour l'objet global CHAP_DATA si il existe
  if (typeof CHAP_DATA === 'undefined') return;

  const chapDataByLang = {
    fr: {
      1: {
        num:"01",title:"A Tight Squeeze",year:"2021",color:"#1a4db5",subtitle:"Le commencement — Usine Principale",
        facts:[{label:"Sortie",val:"Oct. 2021"},{label:"Lieu",val:"Usine Principale"},{label:"Durée",val:"~2 heures"},{label:"Difficulté",val:"Modérée"}],
        quote:{text:"Nous fabriquons de la joie. Nous fabriquons des rêves. Nous fabriquons… des amis.",cite:"— Playtime Co. Slogan interne, 1984"},
        story:[
          {title:"Retour dans l'usine",body:"Un ancien employé de <strong>Playtime Co.</strong> reçoit une mystérieuse cassette VHS le pressant de retourner dans l'usine abandonnée, fermée depuis 1995. En pénétrant dans le bâtiment délabré, il découvre que tous les employés ont disparu en une seule nuit, sans laisser la moindre trace."},
          {title:"Le GrabPack",body:"Armé d'un <strong>GrabPack</strong> — un appareil permettant de saisir des objets à distance via des fils conducteurs — le joueur explore les couloirs rouillés, résout des puzzles mécaniques et cherche des réponses parmi les enregistrements laissés derrière."},
          {title:"L'Éveil de Huggy Wuggy",body:"Ce qui semblait être une simple statue dans le Hall d'entrée se révèle être <strong>l'Expérience 1170</strong> : Huggy Wuggy. Il se met à pourchasser le joueur à travers conduits et couloirs avec une vélocité terrifiante, révélant la vraie nature du projet <em>Bigger Bodies</em>."},
          {title:"Poppy",body:"Après l'affrontement dans les profondeurs, le joueur découvre une poupée de porcelaine enfermée derrière du verre : <strong>Poppy</strong>. La toute première création de Playtime Co. Elle attendait depuis très longtemps. Et elle a des révélations à faire."}
        ],
        monsters:[{name:"Huggy Wuggy",role:"Gardien / Boss principal",icon:"🐛",color:"#1a4db5",status:"boss"},{name:"Poppy",role:"Personnage mystérieux",icon:"🎎",color:"#8b3a8b",status:"mysterieux"}]
      },
      2: {
        num:"02",title:"Fly in a Web",year:"2022",color:"#8b1060",subtitle:"Les jeux mortels — Game Station",
        facts:[{label:"Sortie",val:"Jan. 2023"},{label:"Lieu",val:"Game Station"},{label:"Durée",val:"~3 heures"},{label:"Difficulté",val:"Élevée"}],
        quote:{text:"Jouer, c'est vivre. Et mourir, c'est… participer.",cite:"— Mommy Long Legs, Game Station"},
        story:[
          {title:"La Game Station",body:"Avec <strong>Poppy</strong> comme guide ambiguë, le joueur descend dans la <strong>Game Station</strong> — un complexe souterrain autrefois dédié aux jeux, devenu territoire de chasse pour la créature qui le gouverne."},
          {title:"Mommy Long Legs",body:"<strong>Marie Payne</strong>, ancienne employée transformée en Expérience 1222. Ses membres infiniment extensibles lui permettent d'être partout à la fois. Elle impose au joueur trois <em>jeux mortels</em> — perdre signifie mourir."},
          {title:"Les Épreuves",body:"Statues musicales géantes, labyrinthes chronométrés, courses de billes à taille humaine. Mommy observe, encourage, menace avec une douceur glaçante. <strong>Kissy Missy</strong> apparaît brièvement — et semble vouloir aider."},
          {title:"La Chute",body:"La confrontation finale révèle la tragédie de Mommy Long Legs. Ses dernières paroles sont celles d'une femme qui souffre depuis des années. Le <strong>Prototype</strong>, dans l'ombre, récupère ses restes."}
        ],
        monsters:[{name:"Mommy Long Legs",role:"Maîtresse de la Game Station / Boss",icon:"🕷️",color:"#8b1060",status:"boss"},{name:"Kissy Missy",role:"Alliée mystérieuse",icon:"💗",color:"#c01080",status:"allie"},{name:"Mini Huggys",role:"Ennemis secondaires",icon:"🐛",color:"#1a4db5",status:"boss"}]
      },
      3: {
        num:"03",title:"Deep Sleep",year:"2024",color:"#6b0000",subtitle:"Le cauchemar rouge — Playcare",
        facts:[{label:"Sortie",val:"Jan. 2024"},{label:"Lieu",val:"Playcare"},{label:"Durée",val:"~5 heures"},{label:"Difficulté",val:"Très élevée"}],
        quote:{text:"Le Père nous attend dans le sommeil. Ferme les yeux. Ne résiste pas.",cite:"— CatNap, Playcare"},
        story:[
          {title:"Playcare",body:"Encore plus profond sous l'usine se trouve <strong>Playcare</strong> — un orphelinat souterrain où des centaines d'enfants ont vécu et disparu. L'air est saturé de <strong>Gaz Rouge</strong> hallucinogène diffusé par CatNap."},
          {title:"DogDay",body:"Le joueur découvre <strong>DogDay</strong>, un Smiling Critter agonisant, son corps infesté de créatures parasites. Il avait refusé de servir le Prototype. Ses mots brisés révèlent : <em>les enfants de Playcare étaient le matériau des expériences les plus extrêmes.</em>"},
          {title:"Le Culte de CatNap",body:"<strong>CatNap</strong> n'est pas mu par la rage — il est <em>fanatique</em>. Il croit sincèrement que le Prototype est un dieu et que répandre le Gaz Rouge est un acte de miséricorde."},
          {title:"La Chapelle",body:"La confrontation finale dans une chapelle macabre révèle toute l'horreur de cette dévotion. Après la défaite de CatNap, une certitude s'impose : le Prototype a orchestré chaque pas depuis le début."}
        ],
        monsters:[{name:"CatNap",role:"Serviteur du Prototype / Boss",icon:"😺",color:"#6b0000",status:"boss"},{name:"DogDay",role:"Allié agonisant",icon:"🐕",color:"#c8a740",status:"allie"},{name:"Smiling Critters",role:"Ennemis secondaires",icon:"🧸",color:"#8b0000",status:"boss"}]
      },
      4: {
        num:"04",title:"Safe Haven",year:"2025",color:"#5a3b2e",subtitle:"Les secrets ultimes — Safe Haven",
        facts:[{label:"Sortie",val:"2025"},{label:"Lieu",val:"Safe Haven"},{label:"Durée",val:"~4 heures"},{label:"Difficulté",val:"Extrême"}],
        quote:{text:"Il n'y a pas de refuge. Il n'y a jamais eu de refuge.",cite:"— Inscription sur les murs de Safe Haven"},
        story:[
          {title:"Safe Haven",body:"Le joueur atteint <strong>Safe Haven</strong> — présenté comme un refuge dans les communications internes de Playtime Co. La réalité : c'est le laboratoire ultime."},
          {title:"Doey",body:"<strong>Doey the Doughman</strong>, né de la fusion entre la pâte à modeler et un sujet humain, est la créature la plus imprévisible rencontrée. Malléable à l'infini, capable de toutes les formes, potentiellement immortel — pur <em>chaos</em> incarné."},
          {title:"L'Ampleur des Crimes",body:"Les archives de Safe Haven révèlent l'étendue réelle des expériences : des centaines de sujets humains, des décennies de manipulation. Et surtout, les fichiers de l'<strong>Expérience 1006</strong> — le Prototype."},
          {title:"Le Prototype",body:"Il ne se cache plus. Sa présence a guidé le joueur jusqu'ici — délibérément. La question finale : <em>que veut-il vraiment ?</em>"}
        ],
        monsters:[{name:"Doey",role:"Gardien de Safe Haven / Boss",icon:"🪧",color:"#5a3b2e",status:"boss"},{name:"Le Prototype",role:"Menace suprême",icon:"⚙️",color:"#cc0000",status:"mysterieux"},{name:"Poppy",role:"Alliée ambiguë",icon:"🎎",color:"#8b3a8b",status:"allie"}]
      }
    },
    en: {
      1: {
        num:"01",title:"A Tight Squeeze",year:"2021",color:"#1a4db5",subtitle:"The beginning — Main Factory",
        facts:[{label:"Release",val:"Oct. 2021"},{label:"Location",val:"Main Factory"},{label:"Duration",val:"~2 hours"},{label:"Difficulty",val:"Moderate"}],
        quote:{text:"We make joy. We make dreams. We make… friends.",cite:"— Playtime Co. Internal Slogan, 1984"},
        story:[
          {title:"Return to the Factory",body:"A former <strong>Playtime Co.</strong> employee receives a mysterious VHS tape urging them to return to the abandoned factory, closed since 1995. Upon entering the crumbling building, they discover that all employees vanished in a single night, without a trace."},
          {title:"The GrabPack",body:"Armed with a <strong>GrabPack</strong> — a device that allows grabbing objects at a distance through conductive wires — the player explores rusted hallways, solves mechanical puzzles, and searches for answers among left-behind recordings."},
          {title:"Huggy Wuggy Awakens",body:"What seemed to be a mere statue in the Entry Hall turns out to be <strong>Experiment 1170</strong>: Huggy Wuggy. It begins hunting the player through vents and corridors with terrifying speed, revealing the true nature of the <em>Bigger Bodies</em> project."},
          {title:"Poppy",body:"After the confrontation in the depths, the player discovers a porcelain doll locked behind glass: <strong>Poppy</strong>. Playtime Co.'s very first creation. She had been waiting for a very long time. And she has revelations to make."}
        ],
        monsters:[{name:"Huggy Wuggy",role:"Guardian / Main Boss",icon:"🐛",color:"#1a4db5",status:"boss"},{name:"Poppy",role:"Mysterious character",icon:"🎎",color:"#8b3a8b",status:"mysterieux"}]
      },
      2: {
        num:"02",title:"Fly in a Web",year:"2022",color:"#8b1060",subtitle:"The deadly games — Game Station",
        facts:[{label:"Release",val:"Jan. 2023"},{label:"Location",val:"Game Station"},{label:"Duration",val:"~3 hours"},{label:"Difficulty",val:"High"}],
        quote:{text:"To play is to live. And to die is to… participate.",cite:"— Mommy Long Legs, Game Station"},
        story:[
          {title:"The Game Station",body:"With <strong>Poppy</strong> as an ambiguous guide, the player descends into the <strong>Game Station</strong> — an underground complex once dedicated to games, now hunting ground for the creature that rules it."},
          {title:"Mommy Long Legs",body:"<strong>Marie Payne</strong>, a former employee turned Experiment 1222. Her infinitely stretchable limbs let her be everywhere at once. She subjects the player to three <em>deadly games</em> — losing means dying."},
          {title:"The Trials",body:"Giant musical statues, timed mazes, human-sized marble runs. Mommy watches, encourages, threatens with chilling sweetness. <strong>Kissy Missy</strong> briefly appears — and seems to want to help."},
          {title:"The Fall",body:"The final confrontation reveals the tragedy of Mommy Long Legs. Her last words are those of a woman who has suffered for years. The <strong>Prototype</strong>, lurking in the shadows, collects her remains."}
        ],
        monsters:[{name:"Mommy Long Legs",role:"Game Station Mistress / Boss",icon:"🕷️",color:"#8b1060",status:"boss"},{name:"Kissy Missy",role:"Mysterious ally",icon:"💗",color:"#c01080",status:"allie"},{name:"Mini Huggys",role:"Secondary enemies",icon:"🐛",color:"#1a4db5",status:"boss"}]
      },
      3: {
        num:"03",title:"Deep Sleep",year:"2024",color:"#6b0000",subtitle:"The red nightmare — Playcare",
        facts:[{label:"Release",val:"Jan. 2024"},{label:"Location",val:"Playcare"},{label:"Duration",val:"~5 hours"},{label:"Difficulty",val:"Very High"}],
        quote:{text:"The Father awaits us in sleep. Close your eyes. Do not resist.",cite:"— CatNap, Playcare"},
        story:[
          {title:"Playcare",body:"Even deeper under the factory lies <strong>Playcare</strong> — an underground orphanage where hundreds of children lived and disappeared. The air is saturated with hallucinogenic <strong>Red Gas</strong> dispersed by CatNap."},
          {title:"DogDay",body:"The player finds <strong>DogDay</strong>, a dying Smiling Critter with a body infested by parasitic creatures. He had refused to serve the Prototype. His broken words reveal: <em>the children of Playcare were the material for the most extreme experiments.</em>"},
          {title:"CatNap's Cult",body:"<strong>CatNap</strong> is not driven by rage — it is <em>fanatical</em>. It sincerely believes the Prototype is a god, and that spreading the Red Gas is an act of mercy."},
          {title:"The Chapel",body:"The final confrontation in a macabre chapel reveals the full horror of this devotion. After CatNap's defeat, one certainty remains: the Prototype has orchestrated every step from the very beginning."}
        ],
        monsters:[{name:"CatNap",role:"Prototype's Servant / Boss",icon:"😺",color:"#6b0000",status:"boss"},{name:"DogDay",role:"Dying ally",icon:"🐕",color:"#c8a740",status:"allie"},{name:"Smiling Critters",role:"Secondary enemies",icon:"🧸",color:"#8b0000",status:"boss"}]
      },
      4: {
        num:"04",title:"Safe Haven",year:"2025",color:"#5a3b2e",subtitle:"The ultimate secrets — Safe Haven",
        facts:[{label:"Release",val:"2025"},{label:"Location",val:"Safe Haven"},{label:"Duration",val:"~4 hours"},{label:"Difficulty",val:"Extreme"}],
        quote:{text:"There is no haven. There never was.",cite:"— Writing on the walls of Safe Haven"},
        story:[
          {title:"Safe Haven",body:"The player reaches <strong>Safe Haven</strong> — presented as a refuge in Playtime Co.'s internal communications. The reality: it is the ultimate laboratory."},
          {title:"Doey",body:"<strong>Doey the Doughman</strong>, born from the fusion of modelling clay and a human subject, is the most unpredictable creature encountered yet. Infinitely malleable, capable of any form, potentially immortal — pure <em>chaos</em> incarnate."},
          {title:"The Scale of the Crimes",body:"Safe Haven's archives reveal the true extent of the experiments: hundreds of human subjects, decades of manipulation. Above all, the files on <strong>Experiment 1006</strong> — the Prototype."},
          {title:"The Prototype",body:"It is no longer hiding. Its presence has guided the player here — deliberately. The final question: <em>what does it truly want?</em>"}
        ],
        monsters:[{name:"Doey",role:"Safe Haven Guardian / Boss",icon:"🪧",color:"#5a3b2e",status:"boss"},{name:"The Prototype",role:"Supreme threat",icon:"⚙️",color:"#cc0000",status:"mysterieux"},{name:"Poppy",role:"Ambiguous ally",icon:"🎎",color:"#8b3a8b",status:"allie"}]
      }
    }
  };

  // Remplacer CHAP_DATA global avec les données de la bonne langue
  const data = chapDataByLang[lang];
  Object.keys(data).forEach(k => {
    CHAP_DATA[k] = data[k];
  });
}

// Démarrer
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
