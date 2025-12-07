import React, { useState, useEffect } from "react";
import {
  Music,
  Palette,
  Drama,
  Move,
  ExternalLink,
  Search,
  Star,
  ArrowDown,
  Info,
  Clock,
  BookOpen,
  X,
  FileText,
  Layers,
  Copyright,
  User,
  Trophy,
  Globe,
  MapPin,
  School,
} from "lucide-react";

// --- CURATED ARTWORK DATABASE ---
const ARTWORKS = [
  // ==================== VISUAL ARTS ====================
  {
    id: 101,
    subject: "Visual Arts",
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    type: "Oil on Canvas",
    rightsHolder: "© Succession Picasso / ARS, New York",
    desc: "The definitive Comparative Study piece. Analyze the formal qualities (monochromatic palette, geometric abstraction) alongside its function as a political protest.",
    tags: ["Comparative Study", "Formal Analysis", "Cubism"],
    link: "https://www.museoreinasofia.es/en/collection/artwork/guernica",
    analysis: {
      context:
        "Created for the Spanish Pavilion at the 1937 Paris International Exposition during the Spanish Civil War. Response to the Nazi bombing of Guernica.",
      elements:
        "Uses a Grisaille palette to mimic newspaper aesthetic. Central pyramid composition stabilizes chaotic fragmentation. Symbols (Bull, Horse, Light) are deliberately ambiguous.",
      significance:
        "A universal anti-war symbol. Strength: Timeless myth-making rather than literal documentation. Weakness for analysis: So famous that finding a 'new' perspective is difficult.",
    },
  },
  {
    id: 102,
    subject: "Visual Arts",
    title: "Infinity Mirrored Room",
    artist: "Yayoi Kusama",
    year: "1965-Present",
    type: "Installation",
    rightsHolder: "© Yayoi Kusama",
    desc: 'Essential for Process Portfolio research into "Space" and "Conceptual Art". Focus on how the viewer becomes an integral part of the medium.',
    tags: ["Process Portfolio", "Installation", "Conceptual"],
    link: "https://www.thebroad.org/art/yayoi-kusama/infinity-mirrored-room-souls-millions-light-years-away",
    analysis: {
      context:
        "Emerging from the 1960s avant-garde, reflecting Kusama's hallucinations and desire to visualize the infinite.",
      elements:
        "Mirrors expand small physical space into optical infinity. LED lights create weightlessness. The viewer's body is fragmented and multiplied.",
      significance:
        "Embodies 'Self-Obliteration'. Strength: Challenges the object-viewer dichotomy. Usage: Excellent for discussing exhibition design and audience interaction.",
    },
  },
  {
    id: 103,
    subject: "Visual Arts",
    title: "The Artist Is Present",
    artist: "Marina Abramović",
    year: "2010",
    type: "Performance Art",
    rightsHolder: "© Marina Abramović Archives",
    desc: "A critical work for exploring the boundary between artist and audience. Use this to discuss the ephemeral nature of art.",
    tags: ["Curatorial Practice", "Performance", "Body Art"],
    link: "https://www.moma.org/learn/moma_learning/marina-abramovic-marina-abramovic-the-artist-is-present-2010/",
    analysis: {
      context:
        "A retrospective at MoMA where Abramović sat silent for 736 hours. A test of physical and mental endurance.",
      elements:
        "Mediums: Time, Body, Presence. Minimalist staging focuses entirely on the gaze. The removal of the table increased vulnerability.",
      significance:
        "Transformed the museum into a space of shared energy. Strength: Emotional impact. Critique: The 'celebrity' aspect and commodification of the performance.",
    },
  },
  {
    id: 104,
    subject: "Visual Arts",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    type: "Oil on Canvas",
    rightsHolder: "Public Domain",
    desc: "Perfect for analyzing Impasto technique and Post-Impressionist color theory.",
    tags: ["Post-Impressionism", "Technique", "Color Theory"],
    link: "https://www.moma.org/collection/works/79802",
    analysis: {
      context:
        "Painted from the asylum at Saint-Rémy-de-Provence. Represents an idealized view, combining memory and observation.",
      elements:
        "Thick impasto brushwork creates rhythm and motion. Complementary colors (blue/orange) create vibrancy. The cypress tree links earth and sky.",
      significance:
        "Expressionism precursor. Strength: Visible mark-making as emotional record. Useful for studying how technique conveys psychological state.",
    },
  },
  {
    id: 105,
    subject: "Visual Arts",
    title: "The Two Fridas",
    artist: "Frida Kahlo",
    year: "1939",
    type: "Oil on Canvas",
    rightsHolder: "© Banco de México Diego Rivera Frida Kahlo Museums Trust",
    desc: "A masterclass in symbolism and identity for the Comparative Study.",
    tags: ["Symbolism", "Identity", "Surrealism"],
    link: "https://www.moma.org/collection/works/78787",
    analysis: {
      context:
        "Painted during her divorce from Diego Rivera. Explores her dual heritage (European vs. Indigenous Mexican).",
      elements:
        "Double self-portrait. The exposed hearts and connecting vein symbolize vulnerability and connection. Costume is a primary signifier of cultural identity.",
      significance:
        "Raw, autobiographical surrealism. Strength: deeply personal iconography that speaks to universal themes of pain and loyalty.",
    },
  },
  {
    id: 106,
    subject: "Visual Arts",
    title: "Fountain",
    artist: "Marcel Duchamp",
    year: "1917",
    type: "Readymade",
    rightsHolder: "Public Domain / Succession Marcel Duchamp",
    desc: 'The pivot point of modern art. Essential for discussing "What is Art?".',
    tags: ["Dada", "Conceptual", "Readymade"],
    link: "https://www.tate.org.uk/art/artworks/duchamp-fountain-t07573",
    analysis: {
      context:
        "Submitted to the Society of Independent Artists to test their 'no jury' policy. Rejected, sparking the most important debate in art history.",
      elements:
        "A standard urinal signed 'R. Mutt'. The art is in the *selection* and the *context*, not the craftsmanship.",
      significance:
        "Birth of Conceptual Art. Strength: Intellectual challenge to the institution. Weakness: Lacks formal aesthetic qualities (by design).",
    },
  },
  {
    id: 107,
    subject: "Visual Arts",
    title: "The Great Wave off Kanagawa",
    artist: "Hokusai",
    year: "1831",
    type: "Woodblock Print",
    rightsHolder: "Public Domain",
    desc: "Excellent for studying composition, line, and the Ukiyo-e tradition.",
    tags: ["Ukiyo-e", "Printmaking", "Composition"],
    link: "https://www.metmuseum.org/art/collection/search/45434",
    analysis: {
      context:
        "Part of '36 Views of Mount Fuji'. Edo period Japan, influenced by the introduction of Prussian Blue pigment.",
      elements:
        "Dynamic asymmetry. The fractal-like clawing foam frames Fuji. Use of flat color and strong contour lines.",
      significance:
        "Icon of Japanese art. Strength: Graphic power and use of negative space. Influenced Impressionists (Japonisme).",
    },
  },
  {
    id: 108,
    subject: "Visual Arts",
    title: "Untitled (Skull)",
    artist: "Jean-Michel Basquiat",
    year: "1981",
    type: "Acrylic/Crayon",
    rightsHolder: "© Estate of Jean-Michel Basquiat",
    desc: "Analyze Neo-Expressionism and the fusion of text/image.",
    tags: ["Neo-Expressionism", "Street Art", "Anatomy"],
    link: "https://www.thebroad.org/art/jean-michel-basquiat/untitled",
    analysis: {
      context:
        "Created when Basquiat was 20. Bridges street art and high gallery art. Reflects on mortality and the Black experience.",
      elements:
        "Frenetic brushwork, exposed anatomy, patchwork color. The head is both a skull and a living face, suggesting internal/external duality.",
      significance:
        "Raw energy and cultural critique. Strength: Immediate emotional impact and complex layering of meaning.",
    },
  },
  {
    id: 109,
    subject: "Visual Arts",
    title: "Maman",
    artist: "Louise Bourgeois",
    year: "1999",
    type: "Sculpture (Bronze)",
    rightsHolder: "© The Easton Foundation",
    desc: "Study scale, materiality, and psychoanalytic themes in sculpture.",
    tags: ["Sculpture", "Installation", "Psychoanalysis"],
    link: "https://www.tate.org.uk/art/artworks/bourgeois-maman-t12625",
    analysis: {
      context:
        "A tribute to the artist's mother, a weaver. The spider is a protector, not a monster.",
      elements:
        "Monumental scale (30ft tall). Bronze legs are fragile yet strong. Contains marble eggs. Viewers walk *under* it, creating vulnerability.",
      significance:
        "Redefines public sculpture. Strength: Combines monumental terror with maternal tenderness. Use for studying 3D spatial relationships.",
    },
  },
  {
    id: 110,
    subject: "Visual Arts",
    title: "Untitled Film Stills",
    artist: "Cindy Sherman",
    year: "1977-1980",
    type: "Photography",
    rightsHolder: "© Cindy Sherman",
    desc: 'Crucial for studying the "Male Gaze" and constructed identity.',
    tags: ["Photography", "Post-Modernism", "Feminism"],
    link: "https://www.moma.org/collection/works/56618",
    analysis: {
      context:
        "Sherman poses as generic female tropes from B-movies (the housewife, the victim, the lover) without referencing specific films.",
      elements:
        "Black and white. Deliberately artificial lighting and staging. The artist is both subject and object.",
      significance:
        "Deconstructs female stereotypes. Strength: exposes the performative nature of gender. Weakness: Can be misinterpreted as vanity rather than critique.",
    },
  },
  {
    id: 111,
    subject: "Visual Arts",
    title: "Napoleon Leading the Army",
    artist: "Kehinde Wiley",
    year: "2005",
    type: "Oil on Canvas",
    rightsHolder: "© Kehinde Wiley",
    desc: "Contemporary remix of art history. Excellent for discussing Post-Colonial themes.",
    tags: ["Contemporary", "Portraiture", "Post-Colonial"],
    link: "https://www.brooklynmuseum.org/opencollection/objects/169794",
    analysis: {
      context:
        "Replaces the white subject of Jacques-Louis David's famous painting with a young Black man in streetwear.",
      elements:
        "Hyper-realistic figure against a flat, decorative Rococo background. The pose is heroic and commanding.",
      significance:
        "Inserts the Black body into the canon of power. Strength: visual confrontation of historical exclusion.",
    },
  },
  {
    id: 112,
    subject: "Visual Arts",
    title: "Old Man's Cloth",
    artist: "El Anatsui",
    year: "2003",
    type: "Installation (Found Object)",
    rightsHolder: "© El Anatsui",
    desc: "Study materiality and the transformation of waste into luxury.",
    tags: ["Materiality", "Global Art", "Installation"],
    link: "https://smarthistory.org/el-anatsui-old-mans-cloth/",
    analysis: {
      context:
        "Made from thousands of liquor bottle caps flattened and stitched with copper wire. References the slave trade (rum/liquor exchange).",
      elements:
        "Drapes like fabric (kente cloth) but is rigid metal. Shimmering gold aesthetic vs. trash origin.",
      significance:
        "Elevates recycling to monumentality. Strength: Fluid form allows it to be installed differently every time (variable sculpture).",
    },
  },
  {
    id: 113,
    subject: "Visual Arts",
    title: "Women of Allah",
    artist: "Shirin Neshat",
    year: "1994",
    type: "Photography",
    rightsHolder: "© Shirin Neshat",
    desc: "Powerful photographic series exploring gender, religion, and violence.",
    tags: ["Photography", "Political", "Text/Image"],
    link: "https://smarthistory.org/shirin-neshat-rebellious-silence/",
    analysis: {
      context:
        "Created after Neshat returned to Iran post-Revolution. Explores the complexity of female identity in Islamic fundamentalism.",
      elements:
        "B&W photography overlaid with Farsi calligraphy (poetry). The gun bisects the face or hands, contrasting violence with feminine beauty.",
      significance:
        "Nuanced view of 'Orientalism'. Strength: Visual beauty draws viewer into difficult political content.",
    },
  },
  {
    id: 114,
    subject: "Visual Arts",
    title: "A Subtlety",
    artist: "Kara Walker",
    year: "2014",
    type: "Installation",
    rightsHolder: "© Kara Walker",
    desc: "Monumental installation addressing the history of sugar and slavery.",
    tags: ["Installation", "History", "Race"],
    link: "https://creativetime.org/projects/karawalker/",
    analysis: {
      context:
        "Installed in the defunct Domino Sugar Factory in Brooklyn. A temporary work.",
      elements:
        "A massive Sphinx made of sugar, with caricatured African features. Surrounded by melting molasses 'boys'.",
      significance:
        "Confronts the viewer with the sticky, sweet, brutal history of labor. Strength: Site-specificity was crucial to the meaning.",
    },
  },
  {
    id: 115,
    subject: "Visual Arts",
    title: "Sunflower Seeds",
    artist: "Ai Weiwei",
    year: "2010",
    type: "Installation",
    rightsHolder: "© Ai Weiwei",
    desc: "Conceptual work involving mass production and individuality.",
    tags: ["Conceptual", "Political", "Craft"],
    link: "https://www.tate.org.uk/art/artworks/ai-sunflower-seeds-t13408",
    analysis: {
      context: "Installed at Tate Modern. 100 million porcelain seeds.",
      elements:
        "Each seed was hand-painted by artisans in Jingdezhen. Looks like a mass, but each is unique.",
      significance:
        "Commentary on the 'Made in China' phenomenon and the relationship between the individual and the collective state.",
    },
  },

  // ==================== THEATRE ====================
  {
    id: 201,
    subject: "Theatre",
    title: "Mother Courage",
    artist: "Bertolt Brecht",
    year: "1949",
    type: "Play Text",
    rightsHolder: "© Brecht Heirs / Suhrkamp Verlag",
    desc: 'The central text for the Director\'s Notebook. Study the "Verfremdungseffekt".',
    tags: ["Director's Notebook", "Epic Theatre", "Theory"],
    link: "https://www.nationaltheatre.org.uk/learn-explore/writers/bertolt-brecht/",
    analysis: {
      context:
        "Response to WWII. Brecht wanted to counter passive emotional consumption.",
      elements:
        "V-effect: harsh lighting, visible mechanics, songs. The Wagon is the central motif of capitalism's burden.",
      significance:
        "Denies catharsis to force critical analysis. Strength: clear framework for design choices. Weakness: Can feel dry if not directed with energy.",
    },
  },
  {
    id: 202,
    subject: "Theatre",
    title: "Things I Know To Be True",
    artist: "Frantic Assembly",
    year: "2016",
    type: "Physical Theatre",
    rightsHolder: "© Frantic Assembly / Andrew Bovell",
    desc: 'Analyze "Chair Duets" and "Hymn Hands" for the Collaborative Project.',
    tags: ["Collaborative Project", "Physical Theatre", "Frantic Method"],
    link: "https://www.franticassembly.co.uk/productions/things-i-know-to-be-true",
    analysis: {
      context:
        "Collaboration between writer Andrew Bovell and Frantic Assembly.",
      elements:
        "Pedestrian movements looped and accelerated. Lifts represent emotional weight. Realistic dialogue vs. abstract movement.",
      significance:
        "Physicalization of grief. Strength: Accessible entry point for students into physical theatre.",
    },
  },
  {
    id: 203,
    subject: "Theatre",
    title: "Sonezaki Shinju",
    artist: "Bunraku Tradition",
    year: "1703",
    type: "Puppetry",
    rightsHolder: "Public Domain / UNESCO Heritage",
    desc: 'Prime source for Research Presentation. Focus on "Ningyōtsukai".',
    tags: ["Research Presentation", "Bunraku", "World Tradition"],
    link: "https://ich.unesco.org/en/RL/ningyo-johruri-bunraku-puppet-theatre-00064",
    analysis: {
      context: "Edo period 'Sewamono' (domestic play) by Chikamatsu.",
      elements:
        "Three elements: Tayu (chanter), Shamisen, Ningyōtsukai (puppeteers). Puppets are 2/3 scale.",
      significance:
        "Aesthetic of formal beauty in tragedy. Strength: Separation of voice and body allows analytical distance.",
    },
  },
  {
    id: 204,
    subject: "Theatre",
    title: "A Doll's House",
    artist: "Henrik Ibsen",
    year: "1879",
    type: "Play Text",
    rightsHolder: "Public Domain",
    desc: "The birth of Naturalism. Perfect for realistic acting and set design.",
    tags: ["Realism", "Naturalism", "Feminism"],
    link: "https://www.britannica.com/topic/A-Dolls-House-play-by-Ibsen",
    analysis: {
      context:
        "Scandalous at premiere for the protagonist leaving her family. Challenges 19th-century gender roles.",
      elements:
        "The 'Fourth Wall'. Detailed domestic set. Subtext is crucial—what is NOT said.",
      significance:
        "Moved theatre from melodrama to psychological realism. Strength: Complex character study for Nora.",
    },
  },
  {
    id: 205,
    subject: "Theatre",
    title: "Waiting for Godot",
    artist: "Samuel Beckett",
    year: "1953",
    type: "Play Text",
    rightsHolder: "© Estate of Samuel Beckett",
    desc: "The defining work of the Theatre of the Absurd.",
    tags: ["Absurdism", "Existentialism", "Circular Plot"],
    link: "https://www.bl.uk/works/waiting-for-godot",
    analysis: {
      context:
        "Post-WWII existential crisis. Reflects the meaninglessness of time and action.",
      elements:
        "Circular structure (nothing happens, twice). Minimalist set (a tree). Vaudeville-inspired dialogue.",
      significance:
        "Destroys traditional plot arcs. Strength: Allows focus on actor chemistry and rhythm. Weakness: Can be tedious if comedic timing is off.",
    },
  },
  {
    id: 206,
    subject: "Theatre",
    title: "Antigone",
    artist: "Sophocles",
    year: "441 BC",
    type: "Play Text",
    rightsHolder: "Public Domain",
    desc: "Greek Tragedy foundation. Study the Chorus and the tragic hero flaw.",
    tags: ["Greek Tragedy", "Chorus", "Ethics"],
    link: "https://www.britannica.com/topic/Antigone-play-by-Sophocles",
    analysis: {
      context:
        "Ancient Athens. Explores the conflict between state law (Creon) and divine/moral law (Antigone).",
      elements:
        "The Chorus (voice of the people). Stichomythia (rapid-fire dialogue). Off-stage violence.",
      significance:
        "Timeless political allegory. Strength: High stakes and clear conflict. Useful for exploring choral movement.",
    },
  },
  {
    id: 207,
    subject: "Theatre",
    title: "Hamlet",
    artist: "William Shakespeare",
    year: "1600",
    type: "Play Text",
    rightsHolder: "Public Domain",
    desc: "Elizabethan theatre conventions and the soliloquy.",
    tags: ["Shakespeare", "Soliloquy", "Tragedy"],
    link: "https://www.rsc.org.uk/hamlet/",
    analysis: {
      context:
        "Elizabethan England. Uncertainty of succession. The move towards internal psychological drama.",
      elements:
        "Iambic pentameter. The Soliloquy (internal thought spoken aloud). The 'Play within a Play'.",
      significance:
        "The ultimate psychological portrait. Strength: Infinite interpretative possibilities for directors.",
    },
  },
  {
    id: 208,
    subject: "Theatre",
    title: "The Cherry Orchard",
    artist: "Anton Chekhov",
    year: "1904",
    type: "Play Text",
    rightsHolder: "Public Domain",
    desc: 'Study Stanislavski\'s influence and the concept of "Subtext".',
    tags: ["Naturalism", "Subtext", "Stanislavski"],
    link: "https://www.gutenberg.org/ebooks/2486",
    analysis: {
      context:
        "Pre-Revolution Russia. The decline of the aristocracy and rise of the merchant class.",
      elements:
        "Indirect action (major events happen offstage). Sound design (the breaking string). Ensemble cast.",
      significance:
        "Life as it is actually lived. Strength: The tragedy is mixed with comedy (Chekhov called it a comedy).",
    },
  },
  {
    id: 209,
    subject: "Theatre",
    title: "Jet of Blood",
    artist: "Antonin Artaud",
    year: "1925",
    type: "Play/Theory",
    rightsHolder: "Public Domain / Estate",
    desc: "Theatre of Cruelty. Essential for theoretical research.",
    tags: ["Theatre of Cruelty", "Surrealism", "Avant-Garde"],
    link: "https://www.poetryfoundation.org/poets/antonin-artaud",
    analysis: {
      context:
        "Artaud rejected Western text-based theatre. Wanted a theatre that assaulted the senses.",
      elements:
        "Impossible stage directions (scorpions, crashing stars). Focus on sound, light, and gesture over word.",
      significance:
        "Influenced all post-modern theatre. Strength: Pure liberation of the imagination. Weakness: Nearly impossible to stage literally.",
    },
  },
  {
    id: 210,
    subject: "Theatre",
    title: "Theatre of the Oppressed",
    artist: "Augusto Boal",
    year: "1970s",
    type: "Methodology",
    rightsHolder: "© Estate of Augusto Boal",
    desc: 'Forum Theatre. transforming the spectator into the "spect-actor".',
    tags: ["Political Theatre", "Improv", "Social Change"],
    link: "https://mandalaforchange.com/site/applied-theatre/theatre-of-the-oppressed/",
    analysis: {
      context:
        "Developed in Brazil under dictatorship. Theatre as a tool for revolution.",
      elements:
        "The Joker (facilitator). The Spect-actor (audience member who intervenes). Image Theatre.",
      significance:
        "Democratizes the stage. Strength: Directly engages with social issues. Usage: Great for devising coursework.",
    },
  },
  {
    id: 211,
    subject: "Theatre",
    title: "Lazzi Routines",
    artist: "Commedia dell'arte",
    year: "16th Century",
    type: "Performance Tradition",
    rightsHolder: "Public Domain",
    desc: "Physical comedy, stock characters, and masks.",
    tags: ["Commedia", "Physical Comedy", "Mask"],
    link: "https://www.metmuseum.org/toah/hd/comm/hd_comm.htm",
    analysis: {
      context:
        "Italian Renaissance street theatre. Professional troupes improvising scenarios.",
      elements:
        "Stock Characters (Arlecchino, Pantalone). Lazzi (rehearsed comic physical bits). Leather masks.",
      significance:
        "Foundation of Western comedy. Strength: Teaches physical precision and status transactions.",
    },
  },
  {
    id: 212,
    subject: "Theatre",
    title: "Matsukaze",
    artist: "Kan'ami / Zeami",
    year: "14th Century",
    type: "Noh Theatre",
    rightsHolder: "Public Domain",
    desc: 'Japanese Noh tradition. Study "Jo-Ha-Kyu" and minimalist aesthetic.',
    tags: ["Noh", "World Tradition", "Stylized"],
    link: "https://www.the-noh.com/en/plays/data/play_matsukaze.html",
    analysis: {
      context:
        "Muromachi period. Zen Buddhist influence. A ghost story about attachment.",
      elements:
        "The Shite (main actor in mask). The Hashigakari (bridge). Slow, sliding walk (Suriashi).",
      significance:
        "The art of walking. Strength: Extreme control and spiritual intensity. ",
    },
  },
  {
    id: 213,
    subject: "Theatre",
    title: "Einstein on the Beach",
    artist: "Robert Wilson / Philip Glass",
    year: "1976",
    type: "Opera/Performance",
    rightsHolder: "© Dunvagen Music / Robert Wilson",
    desc: "Post-dramatic theatre. Visuals and duration over plot.",
    tags: ["Post-Dramatic", "Visual Theatre", "Minimalism"],
    link: "https://robertwilson.com/einstein-on-the-beach",
    analysis: {
      context: "Avant-garde NY scene. 5-hour non-narrative opera.",
      elements:
        "Slow-motion movement. Repetitive structure. 'Knee plays' connect scenes. Architecture of light.",
      significance:
        "Freed theatre from the text. Strength: A purely visual/aural landscape.",
    },
  },
  {
    id: 214,
    subject: "Theatre",
    title: "A Midsummer Night's Dream",
    artist: "Peter Brook",
    year: "1970",
    type: "Production",
    rightsHolder: "© RSC / Peter Brook",
    desc: 'The "White Box" production. Study "The Empty Space".',
    tags: ["Directing", "Empty Space", "Ensemble"],
    link: "https://www.vam.ac.uk/articles/peter-brooks-a-midsummer-nights-dream",
    analysis: {
      context:
        "Rejection of 'Deadly Theatre'. Brook wanted immediate connection.",
      elements: "White box set. Circus skills (trapeze). No period costumes.",
      significance:
        "Changed Shakespeare production forever. Strength: Showed that imagination is the only necessary scenery.",
    },
  },
  {
    id: 215,
    subject: "Theatre",
    title: "Death and the King's Horseman",
    artist: "Wole Soyinka",
    year: "1975",
    type: "Play Text",
    rightsHolder: "© Wole Soyinka",
    desc: "Post-colonial tragedy. Clash of Yoruba metaphysics and British colonial rule.",
    tags: ["Post-Colonial", "Ritual", "Tragedy"],
    link: "https://www.britannica.com/topic/Death-and-the-Kings-Horseman",
    analysis: {
      context:
        "Based on real events in Nigeria, 1946. Soyinka warns against reducing it to a simple 'clash of cultures'.",
      elements:
        "Yoruba ritual/chant. The masquerade (Egungun). Rich, poetic language mixing English and Yoruba proverbs.",
      significance:
        "Non-Western tragic structure. Strength: Complexity of the protagonist's spiritual duty.",
    },
  },

  // ==================== MUSIC ====================
  {
    id: 301,
    subject: "Music",
    title: "The Rite of Spring",
    artist: "Igor Stravinsky",
    year: "1913",
    type: "Ballet Score",
    rightsHolder: "Public Domain",
    desc: "The holy grail for MLI. Augurs Chord and Primitivism.",
    tags: ["MLI", "Modernism", "Rhythmic Analysis"],
    link: "https://philharmonia.co.uk/resources/stravinskys-rite-of-spring/",
    analysis: {
      context:
        "Premiered to a riot. A break from Romanticism, inspired by Russian pagan rituals.",
      elements:
        "Polyrhythm. The 'Augurs Chord' (bitonal). Colossal orchestra used percussively. Folk melodies fragmented.",
      significance:
        "Emancipated rhythm. Strength: Clear examples of changing meter for analysis. Usage: Compare with metal or folk.",
    },
  },
  {
    id: 302,
    subject: "Music",
    title: "Music for 18 Musicians",
    artist: "Steve Reich",
    year: "1976",
    type: "Minimalist",
    rightsHolder: "© Boosey & Hawkes",
    desc: "Creating component: Phasing, pulse, and texture.",
    tags: ["Creating", "Minimalism", "Texture"],
    link: "https://www.boosey.com/cr/music/Steve-Reich-Music-for-18-Musicians/554",
    analysis: {
      context:
        "American Minimalism. Moving away from serialism towards psychoacoustic process.",
      elements:
        "11 chords. Steady pulse. Phasing (instruments shifting out of sync). Breath determines phrase length.",
      significance:
        "Restored tonality to avant-garde. Strength: Teaches how to build structure without melody.",
    },
  },
  {
    id: 303,
    subject: "Music",
    title: "Bitches Brew",
    artist: "Miles Davis",
    year: "1970",
    type: "Jazz Fusion",
    rightsHolder: "© Sony Music / Miles Davis Estate",
    desc: "Studio as instrument. Improvisation and tape splicing.",
    tags: ["Listening Paper", "Jazz Fusion", "Improvisation"],
    link: "https://www.milesdavis.com/albums/bitches-brew/",
    analysis: {
      context:
        "Fusion of Jazz and Rock/Funk. Miles wanted to reach the Hendrix audience.",
      elements:
        "Electric instruments. Double rhythm section. Teo Macero spliced jams into structure.",
      significance:
        "Deconstructed jazz form. Strength: Texture over harmony. Analysis: Compare the 'groove' vs 'swing'.",
    },
  },
  {
    id: 304,
    subject: "Music",
    title: "Cello Suite No. 1 in G",
    artist: "J.S. Bach",
    year: "1717",
    type: "Baroque Solo",
    rightsHolder: "Public Domain",
    desc: "Study implied polyphony and compound melody.",
    tags: ["Baroque", "Harmony", "Solo"],
    link: "https://www.britannica.com/topic/Cello-Suites",
    analysis: {
      context:
        "Baroque era. Elevation of the cello from accompaniment to solo voice.",
      elements:
        "Arpeggiation creates 'implied polyphony' (melody + bass + harmony in one line). Motor rhythm.",
      significance:
        "Masterpiece of limitations. Strength: Shows how to create full harmony with a monophonic instrument.",
    },
  },
  {
    id: 305,
    subject: "Music",
    title: "Symphony No. 9",
    artist: "Ludwig van Beethoven",
    year: "1824",
    type: "Choral Symphony",
    rightsHolder: "Public Domain",
    desc: "The bridge to Romanticism. Use of voices in symphony.",
    tags: ["Romantic", "Symphony", "Form"],
    link: "https://philharmonia.co.uk/resources/beethovens-symphony-no-9/",
    analysis: {
      context:
        "Late period Beethoven. Completely deaf. Universal brotherhood theme.",
      elements:
        "Massive scale. 4th movement uses choir (Ode to Joy). Cyclical form (quotes previous movements).",
      significance:
        "Broke the boundaries of the classical symphony. Strength: Thematic development.",
    },
  },
  {
    id: 306,
    subject: "Music",
    title: "Prelude to the Afternoon of a Faun",
    artist: "Claude Debussy",
    year: "1894",
    type: "Symphonic Poem",
    rightsHolder: "Public Domain",
    desc: "Impressionism in music. Color and ambiguity.",
    tags: ["Impressionism", "Timbre", "Harmony"],
    link: "https://www.britannica.com/topic/Prelude-to-the-Afternoon-of-a-Faun",
    analysis: {
      context: "Based on Mallarmé's poem. Rejection of Germanic structuralism.",
      elements:
        "Flute solo in weak register. Tritone usage. Washing of color/timbre rather than functional progression.",
      significance:
        "Boulez said 'Modern music awakens' here. Strength: Ambiguous meter and tonality.",
    },
  },
  {
    id: 307,
    subject: "Music",
    title: "Pierrot Lunaire",
    artist: "Arnold Schoenberg",
    year: "1912",
    type: "Melodrama",
    rightsHolder: "Public Domain",
    desc: "Expressionism and Sprechstimme.",
    tags: ["Expressionism", "Atonal", "Vocal Tech"],
    link: "https://www.schoenberg.at/index.php/en/joomla-license-sp-1943310036/pierrot-lunaire-op-21-1912",
    analysis: {
      context: "Vienna. Exploration of the subconscious and madness.",
      elements:
        "Atonal (free atonality). Sprechstimme (speech-song). Numerology (7 notes, 21 poems).",
      significance:
        "Breakdown of tonality. Strength: Text painting of psychological states.",
    },
  },
  {
    id: 308,
    subject: "Music",
    title: "4'33\"",
    artist: "John Cage",
    year: "1952",
    type: "Aleatoric",
    rightsHolder: "© C.F. Peters",
    desc: 'Philosophy of sound. "There is no such thing as silence".',
    tags: ["Aleatoric", "Philosophy", "Conceptual"],
    link: "https://www.moma.org/collection/works/81363",
    analysis: {
      context: "Influenced by Zen Buddhism and Rauschenberg's white paintings.",
      elements:
        "Tacet (silence) for three movements. The content is the ambient sound of the room.",
      significance:
        "Redefined music as organized sound. Strength: Challenges the definition of performance.",
    },
  },
  {
    id: 309,
    subject: "Music",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    year: "1975",
    type: "Rock Opera",
    rightsHolder: "© Queen Music Ltd",
    desc: "Structure in Pop music. Opera section analysis.",
    tags: ["Rock", "Structure", "Production"],
    link: "https://www.queenonline.com/music/a-night-at-the-opera",
    analysis: {
      context: "1970s Rock. Ambition to merge high art (Opera) with Pop.",
      elements:
        "No chorus. Distinct sections: Ballad, Opera, Hard Rock, Coda. Massive overdubbing of vocals.",
      significance:
        "Complex form in a pop context. Strength: Analysis of non-strophic song structures.",
    },
  },
  {
    id: 310,
    subject: "Music",
    title: "Raga Sindhi Bhairavi",
    artist: "Ravi Shankar",
    year: "N/A",
    type: "Indian Classical",
    rightsHolder: "© Ravi Shankar Foundation",
    desc: "MLI essential for Non-Western analysis.",
    tags: ["World Music", "Improv", "Texture"],
    link: "https://www.ravishankar.org/",
    analysis: {
      context: "Hindustani classical tradition. Morning Raga.",
      elements:
        "Drone (Tambura), Melody (Sitar), Rhythm (Tabla). Alap (intro), Jor, Gat (composition). Tala cycles.",
      significance:
        "Melodic complexity without harmony. Strength: rhythmic complexity (Tihai).",
    },
  },
  {
    id: 311,
    subject: "Music",
    title: "Gamelan Gong Kebyar",
    artist: "Balinese Tradition",
    year: "Trad.",
    type: "Ensemble",
    rightsHolder: "Public Domain",
    desc: "Texture and Interlocking rhythms (Kotekan).",
    tags: ["World Music", "Texture", "Rhythm"],
    link: "https://ich.unesco.org/en/RL/three-genres-of-traditional-dance-in-bali-00617",
    analysis: {
      context: "Bali, Indonesia. Kebyar means 'to flare up' (explosive style).",
      elements:
        "Metallophones. Paired tuning (shimmering effect). Kotekan (interlocking parts). Cyclic structure (Gong).",
      significance:
        "Community-based ensemble. Strength: Texture analysis (Heterophony).",
    },
  },
  {
    id: 312,
    subject: "Music",
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    year: "2015",
    type: "Hip Hop",
    rightsHolder: "© Top Dawg / Aftermath / Interscope",
    desc: "Contemporary sociopolitical music. Jazz/Funk influence.",
    tags: ["Hip Hop", "Jazz", "Social"],
    link: "https://pitchfork.com/reviews/albums/20390-to-pimp-a-butterfly/",
    analysis: {
      context:
        "Black Lives Matter era. Exploration of fame, depression, and heritage.",
      elements:
        "Live instrumentation (Thundercat, Kamasi Washington). Complex rhyme schemes. Spoken word structure.",
      significance:
        "Elevated Hip Hop to high art. Strength: Musical density and lyrical depth.",
    },
  },
  {
    id: 313,
    subject: "Music",
    title: "Trans-Europe Express",
    artist: "Kraftwerk",
    year: "1977",
    type: "Electronic",
    rightsHolder: "© Kraftwerk",
    desc: "The birth of electronic dance music and Hip Hop sampling.",
    tags: ["Electronic", "Technology", "Minimalism"],
    link: "https://kraftwerk.com/",
    analysis: {
      context: "Post-war Germany (Krautrock). Embracing technology/machines.",
      elements:
        "Synthesizers. Drum machines. Repetitive motorik beat. Vocoder.",
      significance:
        "Laid foundation for Techno and Hip Hop (Afrika Bambaataa sample). Strength: Machine aesthetic.",
    },
  },
  {
    id: 314,
    subject: "Music",
    title: "Threnody to the Victims of Hiroshima",
    artist: "Krzysztof Penderecki",
    year: "1960",
    type: "Sonorism",
    rightsHolder: "© PWM Edition",
    desc: "Timbre as the primary structural element.",
    tags: ["Texture", "Timbre", "Notation"],
    link: "https://culture.pl/en/work/threnody-to-the-victims-of-hiroshima-krzysztof-penderecki",
    analysis: {
      context:
        "Polish Avant-Garde. Dedicated to Hiroshima victims later (originally 8'37'').",
      elements:
        "52 string instruments. Microtones. Extended techniques (playing behind bridge). Graphic notation.",
      significance:
        "Sound mass composition. Strength: Emotional terror created through purely acoustic means.",
    },
  },
  {
    id: 315,
    subject: "Music",
    title: "Pope Marcellus Mass",
    artist: "Palestrina",
    year: "1562",
    type: "Renaissance Mass",
    rightsHolder: "Public Domain",
    desc: "Polyphony and the Counter-Reformation.",
    tags: ["Renaissance", "Polyphony", "Sacred"],
    link: "https://www.britannica.com/topic/Missa-Papae-Marcelli",
    analysis: {
      context:
        "Council of Trent. Church wanted to ban polyphony due to unintelligible text.",
      elements:
        "6 voices. Smooth voice leading. Homorhythmic sections for text clarity.",
      significance:
        "Saved polyphony in the church. Strength: Balance of vertical harmony and horizontal melody.",
    },
  },

  // ==================== DANCE ====================
  {
    id: 401,
    subject: "Dance",
    title: "Revelations",
    artist: "Alvin Ailey",
    year: "1960",
    type: "Modern Dance",
    rightsHolder: "© Alvin Ailey Dance Foundation",
    desc: 'Gold standard for analysis. "Blood Memories" and spirituals.',
    tags: ["Dance Analysis", "Modern", "Culture"],
    link: "https://www.alvinailey.org/performances/repertoire/revelations",
    analysis: {
      context:
        "African-American experience from slavery to freedom. Ailey's 'blood memories' of Texas.",
      elements:
        "Graham contractions + Ballet lines + African vernacular. 'Wade in the Water' uses props (silk) to create environment.",
      significance:
        "Celebration of Black heritage. Strength: Clear narrative arc and distinct sections for analysis.",
    },
  },
  {
    id: 402,
    subject: "Dance",
    title: "Rosas danst Rosas",
    artist: "Anne Teresa De Keersmaeker",
    year: "1983",
    type: "Post-Modern",
    rightsHolder: "© Rosas",
    desc: "Repetition and pedestrian gesture.",
    tags: ["Composition", "Post-Modern", "Repetition"],
    link: "https://www.rosas.be/en/publications/441-rosas-danst-rosas",
    analysis: {
      context: "Belgium. Rejection of narrative. Focus on structure.",
      elements:
        "The 'Chair' section: slumping, hair fixing, checking watch. Mathematical canon structure. Unison.",
      significance:
        "Exhaustion as aesthetic. Strength: Shows how to make a masterpiece from simple gestures.",
    },
  },
  {
    id: 403,
    subject: "Dance",
    title: "The Statement",
    artist: "Crystal Pite",
    year: "2016",
    type: "Contemporary",
    rightsHolder: "© Kidd Pivot",
    desc: "Text and movement fusion. Power dynamics.",
    tags: ["Performance", "Narrative", "Contemporary"],
    link: "https://kiddpivot.org/works/the-statement/",
    analysis: {
      context: "Critique of corporate/political bureaucracy.",
      elements:
        "Movement locked to rhythm of speech. Table as battleground. Grotesque/stylized body language.",
      significance:
        "Physical subtext. Strength: narrative clarity through abstract movement.",
    },
  },
  {
    id: 404,
    subject: "Dance",
    title: "Swan Lake",
    artist: "Marius Petipa / Lev Ivanov",
    year: "1895",
    type: "Classical Ballet",
    rightsHolder: "Public Domain",
    desc: "The definition of Classical Ballet. The dual role of Odette/Odile.",
    tags: ["Ballet", "Romanticism", "Technique"],
    link: "https://www.roh.org.uk/tickets-and-events/swan-lake-details",
    analysis: {
      context: "Imperial Russia. Tchaikovsky score.",
      elements:
        "Corps de ballet (patterns). The 32 fouettés (virtuosity). Mime gestures. White Act (Ivanov) vs Court Act (Petipa).",
      significance:
        "The technical benchmark. Strength: Contrast between lyrical (White Swan) and sharp (Black Swan) qualities.",
    },
  },
  {
    id: 405,
    subject: "Dance",
    title: "Lamentation",
    artist: "Martha Graham",
    year: "1930",
    type: "Modern Dance",
    rightsHolder: "© Martha Graham Center",
    desc: "The Contraction and Release. Grief personified.",
    tags: ["Graham", "Modern", "Costume"],
    link: "https://marthagraham.org/history/",
    analysis: {
      context:
        "Early Modernism. Seeking a uniquely American movement vocabulary.",
      elements:
        "Tube of purple jersey fabric constricts the body. Focus on the torso. Contraction and Release.",
      significance:
        "Dance as expression of inner psyche. Strength: Costume as partner/restriction.",
    },
  },
  {
    id: 406,
    subject: "Dance",
    title: "The Rite of Spring",
    artist: "Pina Bausch",
    year: "1975",
    type: "Tanztheater",
    rightsHolder: "© Pina Bausch Foundation",
    desc: "Raw emotion and stage design (The Dirt).",
    tags: ["Tanztheater", "Expressionist", "Staging"],
    link: "https://www.pinabausch.org/en/works/le-sacre-du-printemps",
    analysis: {
      context: "German Tanztheater. Re-imagining the Stravinsky ritual.",
      elements:
        "Stage covered in peat soil. Dancers sweat, pant, and get dirty. The Red Dress (the victim). Violent, repetitive movement.",
      significance:
        "Primal reality vs. balletic artifice. Strength: Visceral physical toll on the dancer.",
    },
  },
  {
    id: 407,
    subject: "Dance",
    title: "RainForest",
    artist: "Merce Cunningham",
    year: "1968",
    type: "Modern / Chance",
    rightsHolder: "© Merce Cunningham Trust",
    desc: "Chance procedures and collaboration (Warhol balloons).",
    tags: ["Chance", "Collaboration", "Abstract"],
    link: "https://www.mercecunningham.org/the-work/choreography/rainforest/",
    analysis: {
      context:
        "Collaboration with Andy Warhol (Silver Clouds). Music and dance created independently.",
      elements:
        "Floating silver pillows. Dancers move through them without interacting. Chance operations determined structure.",
      significance:
        "Independence of art forms. Strength: Pure movement without narrative interpretation.",
    },
  },
  {
    id: 408,
    subject: "Dance",
    title: "L'Après-midi d'un Faune",
    artist: "Vaslav Nijinsky",
    year: "1912",
    type: "Modernist Ballet",
    rightsHolder: "Public Domain",
    desc: "2D movement and the break from turnout.",
    tags: ["Ballet Russes", "Modernism", "Controversial"],
    link: "https://www.musee-orsay.fr/en/artworks/prisme/l-apres-midi-d-un-faune",
    analysis: {
      context: "Ballet Russes. Scandalous erotic subtext.",
      elements:
        "Parallel feet (anti-ballet). Profile poses (like Greek vases). Angular/Staccato movement.",
      significance:
        "The beginning of modern ballet. Strength: Rejection of the vertical/aerial for the grounded/heavy.",
    },
  },
  {
    id: 409,
    subject: "Dance",
    title: "DESH",
    artist: "Akram Khan",
    year: "2011",
    type: "Contemporary Kathak",
    rightsHolder: "© Akram Khan Company",
    desc: "Fusion of Kathak and Contemporary. Story of heritage.",
    tags: ["Kathak", "Fusion", "Solo"],
    link: "https://www.akramkhancompany.net/productions/desh/",
    analysis: {
      context: "Solo work about Khan's relationship with Bangladesh.",
      elements:
        "Kathak footwork/arms mixed with floor work. Visual design (painted lines). Character shifting (father/son).",
      significance:
        "Intercultural body. Strength: Narrative through hybrid vocabulary.",
    },
  },
  {
    id: 410,
    subject: "Dance",
    title: "Deca Dance",
    artist: "Ohad Naharin",
    year: "1999",
    type: "Contemporary",
    rightsHolder: "© Batsheva Dance Company",
    desc: "Gaga movement language. The semi-circle.",
    tags: ["Gaga", "Ensemble", "Ritual"],
    link: "https://batsheva.co.il/en/works/decadance",
    analysis: {
      context:
        "Israel. Compilation of Naharin's works. Gaga promotes listening to the body.",
      elements:
        "The semi-circle (Echad Mi Yodea). Shedding of clothes. Explosive vs. soft texture.",
      significance:
        " visceral, animalistic movement. Strength: Ensemble power and accumulation.",
    },
  },
  {
    id: 411,
    subject: "Dance",
    title: "In the Middle, Somewhat Elevated",
    artist: "William Forsythe",
    year: "1987",
    type: "Neoclassical",
    rightsHolder: "© William Forsythe",
    desc: "Deconstruction of ballet technique. Attitude and off-balance.",
    tags: ["Neoclassical", "Technique", "Athletic"],
    link: "https://www.williamforsythe.com/portfolio.html",
    analysis: {
      context: "Paris Opera Ballet. Electronic score by Thom Willems.",
      elements:
        "Off-balance extensions. Extreme flexibility. Competitive attitude. Industrial lighting.",
      significance:
        "Ballet with attitude. Strength: Pushed the physical limits of ballet technique.",
    },
  },
  {
    id: 412,
    subject: "Dance",
    title: "Sutra",
    artist: "Sidi Larbi Cherkaoui",
    year: "2008",
    type: "Contemporary",
    rightsHolder: "© Eastman",
    desc: "Shaolin Monks and wooden boxes.",
    tags: ["Intercultural", "Set Design", "Martial Arts"],
    link: "https://www.east-man.be/en/14/19/Sutra",
    analysis: {
      context:
        "Collaboration with Shaolin monks and Antony Gormley (sculptor).",
      elements:
        "Kung Fu vocabulary. Wooden boxes transform into walls, beds, lotuses. Interaction with objects.",
      significance:
        "East meets West. Strength: Architecture of the space defines the movement.",
    },
  },
  {
    id: 413,
    subject: "Dance",
    title: "Set and Reset",
    artist: "Trisha Brown",
    year: "1983",
    type: "Post-Modern",
    rightsHolder: "© Trisha Brown Dance Company",
    desc: "Release technique and fluid structure.",
    tags: ["Release", "Fluidity", "Improv"],
    link: "https://trishabrowncompany.org/repertory/set-and-reset.html",
    analysis: {
      context: "Post-Modernism. Rauschenberg design.",
      elements:
        "Release technique (momentum, gravity). Liquid movement quality. Unpredictable entrances/exits.",
      significance:
        "Organized chaos. Strength: The appearance of improvisation within strict structure.",
    },
  },
  {
    id: 414,
    subject: "Dance",
    title: "The Show Must Go On",
    artist: "Jérôme Bel",
    year: "2001",
    type: "Conceptual Dance",
    rightsHolder: "© Jérôme Bel",
    desc: "Non-dance and pop culture.",
    tags: ["Conceptual", "Non-Dance", "Pop Culture"],
    link: "https://www.jeromebel.fr/eng/creations/the_show_must_go_on",
    analysis: {
      context:
        "Conceptual movement. Questioning what constitutes a dance performance.",
      elements:
        "Pop songs played in full. Performers often stand still or do literal actions. Audience expectation is challenged.",
      significance:
        "Anti-spectacle. Strength: Intellectual critique of the entertainment industry.",
    },
  },
  {
    id: 415,
    subject: "Dance",
    title: "Sankai Juku",
    artist: "Amagatsu Ushio",
    year: "1975-Present",
    type: "Butoh",
    rightsHolder: "© Sankai Juku",
    desc: "Butoh: The Dance of Darkness. Slow, controlled, white body.",
    tags: ["Butoh", "Avant-Garde", "Slow"],
    link: "https://www.sankaijuku.com/",
    analysis: {
      context:
        "Post-WWII Japan. Reaction against Westernization and the trauma of the bomb.",
      elements:
        "White powder. Shaved heads. Extremely slow movement. Contorted shapes. Gravity.",
      significance:
        "Dance of the soul, not the body. Strength: Intensity of presence.",
    },
  },
];

const SUBJECTS = [
  { name: "All", icon: Star, color: "text-yellow-600" },
  { name: "Visual Arts", icon: Palette, color: "text-purple-600" },
  { name: "Music", icon: Music, color: "text-blue-600" },
  { name: "Theatre", icon: Drama, color: "text-red-600" },
  { name: "Dance", icon: Move, color: "text-emerald-600" },
];

// --- COMPONENTS ---

const NeuButton = ({ children, onClick, isActive, className = "" }) => (
  <button
    onClick={onClick}
    className={`
      relative px-5 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300 ease-out
      flex items-center gap-2 text-sm md:text-base border border-white/20 select-none
      ${
        isActive
          ? "bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff] text-slate-800 transform scale-95"
          : "bg-[#e0e5ec] shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] hover:shadow-[7px_7px_14px_#b8b9be,-7px_-7px_14px_#ffffff] text-slate-500 hover:-translate-y-0.5"
      }
      ${className}
    `}
  >
    {children}
  </button>
);

const GlassCard = ({ children, className = "", onClick }) => (
  <div
    onClick={onClick}
    className={`
      backdrop-blur-xl bg-white/40 border-t border-l border-white/60 
      shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] 
      rounded-2xl p-6 relative overflow-hidden
      ${className}
    `}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
    {children}
  </div>
);

const EmbossedLabel = ({ text }) => (
  <span
    className="
    bg-[#f0f0f3] text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 
    shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff] 
    rounded-md inline-block
  "
  >
    {text}
  </span>
);

const AnalysisModal = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0 bg-[#e0e5ec]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-[#fdfbf7] rounded-lg shadow-[20px_20px_60px_rgba(0,0,0,0.2)] transform transition-all duration-300 animate-in slide-in-from-bottom-10 border border-amber-100 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="h-12 bg-amber-100 border-b border-amber-200 flex items-center px-6 justify-between">
          <div className="flex items-center gap-2">
            <FileText className="text-amber-600 w-5 h-5" />
            <span className="font-mono text-amber-800 text-sm uppercase tracking-widest font-bold">
              CONFIDENTIAL // IB ANALYSIS RECORD //{" "}
              {artwork.id.toString().padStart(3, "0")}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-amber-800 hover:text-red-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          <div className="flex justify-between items-start mb-8 border-b-2 border-slate-200 pb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-2">
                {artwork.title}
              </h2>
              <p className="text-xl text-slate-500 font-light italic">
                {artwork.artist}, {artwork.year}
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="transform rotate-12 border-4 border-red-800/20 text-red-800/30 font-black text-2xl uppercase p-2 rounded-lg inline-block mb-2">
                Canonical
              </div>
              <p className="text-[10px] text-slate-400 font-mono uppercase">
                Rights: {artwork.rightsHolder}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-700">
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 text-purple-600 font-bold uppercase tracking-wider text-sm border-b border-purple-100 pb-1">
                <Clock className="w-4 h-4" /> Cultural Context
              </div>
              <p className="leading-relaxed text-sm md:text-base">
                {artwork.analysis.context}
              </p>
            </div>

            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm border-b border-blue-100 pb-1">
                <Layers className="w-4 h-4" /> Formal Elements
              </div>
              <p className="leading-relaxed text-sm md:text-base">
                {artwork.analysis.elements}
              </p>
            </div>

            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-sm border-b border-emerald-100 pb-1">
                <Star className="w-4 h-4" /> Significance
              </div>
              <p className="leading-relaxed text-sm md:text-base font-medium">
                {artwork.analysis.significance}
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-200 text-xs font-mono text-slate-400 flex flex-col md:flex-row justify-between gap-2">
            <span>
              REF: {artwork.subject.toUpperCase()} /{" "}
              {artwork.type.toUpperCase()}
            </span>
            <span>RECOMMENDED FOR: {artwork.tags.join(", ")}</span>
            <span className="flex items-center gap-1">
              <Copyright size={10} /> {artwork.rightsHolder}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CREATOR MODAL WITH VERTICAL IMAGE & SCROLLYTELLING ---
const CreatorModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0 bg-[#e0e5ec]/90 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl bg-[#f8f9fa] rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] transform transition-all duration-300 animate-in zoom-in-95 border border-white/50 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="h-16 bg-gradient-to-r from-slate-200 to-slate-100 border-b border-white/60 flex items-center px-6 justify-between shadow-sm z-20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white p-2 rounded-lg shadow-md">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-700 text-lg leading-none">
                Arnav Ajana
              </h3>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                Creator & MYP 5 Student
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-200 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] text-slate-600 hover:text-red-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SCROLLABLE CONTENT AREA */}
        <div className="overflow-y-auto custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-fixed">
          {/* SECTION 1: PROFILE & BIO (SCROLLYTELLING INTRO) */}
          <div className="p-8 md:p-12 border-b border-slate-200 bg-white/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Vertical Image Container - Adjusted for 3:4 or similar portrait ratio */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border-8 border-white shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  {/* --- REPLACE WITH YOUR UPLOADED FILE PATH: /arnav.jpg --- */}
                  <img
                    src="/arnav.jpg"
                    alt="Arnav Ajana"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-mono text-xs uppercase tracking-widest">
                      Gurgaon, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Biography Text (500 Words - Breaking Norms) */}
              <div className="w-full md:w-2/3 pt-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
                  Breaking Norms <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    Through Movement
                  </span>
                </h2>

                <div className="prose prose-slate text-justify">
                  <p className="text-slate-600 text-lg leading-relaxed font-medium mb-4">
                    I am an Indian dancer based in Gurgaon, redefining what it
                    means to be a performer in the 21st century. My artistic
                    practice is a deliberate collision of worlds—spanning the
                    rigorous, gravity-defying discipline of{" "}
                    <strong>Ballet</strong>, the expressive improvisational
                    freedom of <strong>Jazz and Contemporary</strong>, the raw,
                    rhythmic energy of <strong>Hip-Hop and Commercial</strong>,
                    and the ancient, martial intensity of <strong>Chhau</strong>
                    .
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium mb-4">
                    Growing up in a culture rich with tradition, I chose not to
                    be confined by a single label. Embracing these diverse forms
                    allows me to break cultural norms and challenge the expected
                    narrative of what an "Indian dancer" looks like. It is a
                    balancing act between the precision of the West and the
                    grounded power of the East. My work explores how these
                    seemingly opposing forces can coexist within a single body,
                    creating a movement language that is uniquely my own.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    My journey is proof that when you refuse to be categorized,
                    you don't just participate—you win. I created{" "}
                    <strong>IB E-Source</strong> because I know the struggle of
                    finding resources that speak to this level of depth. This
                    platform is my way of empowering other students to find the
                    knowledge they need to break their own boundaries and define
                    their own stages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: TIMELINE (SCROLLYTELLING CONTINUATION) */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-slate-300 flex-grow"></div>
              <h4 className="text-xl font-bold text-slate-400 uppercase tracking-widest">
                My Journey to the Stage
              </h4>
              <div className="h-px bg-slate-300 flex-grow"></div>
            </div>

            <div className="max-w-3xl mx-auto relative pl-8 border-l-2 border-dashed border-slate-300 space-y-16 pb-12">
              {/* 1. The Beginning */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-purple-500 border-4 border-[#f8f9fa] shadow-lg" />
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <School size={100} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-purple-600 uppercase bg-purple-100 px-2 py-1 rounded">
                      The Foundation
                    </span>
                  </div>
                  <h5 className="font-bold text-slate-800 text-2xl mb-3">
                    Where It Started
                  </h5>
                  <p className="text-slate-600 leading-relaxed">
                    My journey began in school, where I discovered my passion
                    for dance. I mastered the stage by winning multiple Intra
                    and Inter-school competitions, performing in solos, duets,
                    and groups.
                  </p>
                </div>
              </div>

              {/* 2. National */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-[#f8f9fa] shadow-lg" />
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Trophy size={100} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">
                      Gwalior, India
                    </span>
                  </div>
                  <h5 className="font-bold text-slate-800 text-2xl mb-4">
                    My National Championship
                  </h5>
                  <p className="text-slate-600 mb-6">
                    I took my skills to the national level in Gwalior, where I
                    competed against the best in the country.
                  </p>
                  <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">
                        Folk Group
                      </span>
                      <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        1st Place 🥇
                      </span>
                    </div>
                    <div className="h-px bg-slate-200 w-full"></div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">
                        Semi-classical Solo
                      </span>
                      <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        1st Place 🥇
                      </span>
                    </div>
                    <div className="h-px bg-slate-200 w-full"></div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">
                        Semi-classical Group
                      </span>
                      <span className="font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        3rd Place 🥉
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. International */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-[#f8f9fa] shadow-lg" />
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Globe size={100} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                      Nessebar, Bulgaria
                    </span>
                  </div>
                  <h5 className="font-bold text-slate-800 text-2xl mb-3">
                    Representing India
                  </h5>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    I had the honor of representing my country internationally
                    at the <strong>"Sun, Joy and Beauty" Festival</strong>.
                  </p>
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-xl text-amber-700 font-bold shadow-sm border border-amber-200">
                    <Trophy size={20} className="text-amber-500" />
                    International 1st Place Winner
                  </div>
                </div>
              </div>

              {/* 4. Future */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-300 border-4 border-[#f8f9fa] shadow-lg animate-pulse" />
                <div className="bg-slate-50/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 border-dashed">
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowDown className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Next Mission
                    </span>
                  </div>
                  <h5 className="font-bold text-slate-600 text-2xl mb-2">
                    Upcoming International Solo
                  </h5>
                  <p className="text-slate-500 italic">
                    I am currently training to represent India once again on the
                    global stage with a new solo performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeSubject, setActiveSubject] = useState("All");
  const [scrolled, setScrolled] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showCreator, setShowCreator] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredResources = ARTWORKS.filter((res) => {
    const matchesSubject =
      activeSubject === "All" || res.subject === activeSubject;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#e0e5ec] text-slate-700 font-sans selection:bg-purple-200 overflow-x-hidden relative">
      {/* Background Texture (Skeuomorphic Dot Grid) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#a3aab8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center z-10 p-6">
        {/* Animated Title */}
        <div
          className="relative mb-12 transition-all duration-700 ease-out"
          style={{
            transform: `translateY(${scrolled * 0.5}px) scale(${
              1 - scrolled * 0.0005
            })`,
            opacity: 1 - scrolled * 0.002,
          }}
        >
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-400/30 rounded-full blur-3xl animate-pulse delay-700" />

          <GlassCard className="px-12 py-16 text-center relative overflow-hidden">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-800 mb-2">
              IB{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                E-Source
              </span>
            </h1>
            <p className="text-xl font-light text-slate-500 tracking-widest uppercase">
              The Digital Atelier for Arts
            </p>
          </GlassCard>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 animate-bounce transition-opacity duration-300"
          style={{ opacity: scrolled > 100 ? 0 : 1 }}
        >
          <ArrowDown className="text-slate-400 w-8 h-8" />
        </div>
      </section>

      {/* --- ARCHIVE SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-24 min-h-screen">
        {/* Navigation Bar */}
        <div className="sticky top-6 z-50 mb-16">
          <div className="bg-[#e0e5ec]/80 backdrop-blur-lg rounded-3xl p-4 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] border border-white/40 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Subject Toggles */}
            <div className="flex flex-wrap justify-center gap-3">
              {SUBJECTS.map((sub) => (
                <NeuButton
                  key={sub.name}
                  isActive={activeSubject === sub.name}
                  onClick={() => setActiveSubject(sub.name)}
                >
                  <sub.icon className={`w-4 h-4 ${sub.color}`} />
                  <span className="hidden sm:inline">{sub.name}</span>
                </NeuButton>
              ))}
            </div>

            {/* Neumorphic Search */}
            <div className="w-full md:w-auto relative group">
              <input
                type="text"
                placeholder="Search artist, work, or concept..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-11 pr-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] outline-none text-slate-600 placeholder-slate-400 focus:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-shadow"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredResources.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-24 opacity-40">
              <BookOpen className="w-20 h-20 mb-6 text-slate-400" />
              <p className="text-2xl font-light">
                No works found in the archive.
              </p>
            </div>
          ) : (
            filteredResources.map((res, index) => (
              <div
                key={res.id}
                className="group perspective-1000"
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
                  opacity: 0,
                  transform: "translateY(30px)",
                }}
              >
                <style>{`
                  @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}</style>

                <GlassCard className="h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:border-white/90">
                  {/* Card Header (Subject & Year) */}
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-400/10">
                    <div className="flex items-center gap-2">
                      {/* Subject Dot */}
                      <div
                        className={`w-2 h-2 rounded-full 
                          ${
                            res.subject === "Visual Arts"
                              ? "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                              : res.subject === "Theatre"
                              ? "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                              : res.subject === "Music"
                              ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                              : "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                          }`}
                      />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {res.subject}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                      <Clock className="w-3 h-3" />
                      {res.year}
                    </div>
                  </div>

                  {/* Artwork Details */}
                  <div className="mb-2">
                    <h2 className="text-2xl font-serif text-slate-800 leading-tight group-hover:text-purple-800 transition-colors">
                      {res.title}
                    </h2>
                    <p className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-wide">
                      {res.artist}
                    </p>
                    <p className="text-xs text-slate-400 italic mt-1">
                      {res.type}
                    </p>
                  </div>

                  {/* Analysis Description */}
                  <div className="relative pl-4 border-l-2 border-purple-200 mb-6 flex-grow">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div className="space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {res.tags.map((tag) => (
                        <EmbossedLabel key={tag} text={tag} />
                      ))}
                    </div>

                    <div className="grid grid-cols-4 gap-3 pt-2">
                      <NeuButton
                        onClick={() => setSelectedArtwork(res)}
                        className="col-span-3 justify-center text-xs !py-3 hover:text-purple-600"
                      >
                        Analysis Guide <Info className="w-4 h-4 ml-2" />
                      </NeuButton>

                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-1 contents"
                      >
                        <NeuButton className="justify-center !px-0 bg-[#e0e5ec] text-slate-600 hover:text-blue-600">
                          <ExternalLink className="w-4 h-4" />
                        </NeuButton>
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 mt-10 py-16 text-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <div className="flex-1 p-6 rounded-2xl shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] bg-[#e0e5ec] text-left">
            <p className="text-slate-600 font-bold text-xs uppercase tracking-wide mb-2">
              Legal Disclaimer
            </p>
            <p className="text-slate-500 text-[10px] leading-relaxed">
              IB E-Source does not claim ownership of any artworks listed. All
              intellectual property belongs to their respective copyright
              holders. This database is for academic analysis only.
            </p>
          </div>

          <div className="flex-shrink-0">
            <NeuButton
              onClick={() => setShowCreator(true)}
              className="!px-8 !py-4 flex items-center gap-3"
            >
              <User className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-bold text-slate-600">
                About the Creator
              </span>
            </NeuButton>
          </div>
        </div>
      </footer>

      {/* Modal Injection */}
      {selectedArtwork && (
        <AnalysisModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}

      {showCreator && <CreatorModal onClose={() => setShowCreator(false)} />}
    </div>
  );
}
