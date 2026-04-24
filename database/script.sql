-- =========================
-- TABELA: sintese
-- =========================
CREATE TABLE sintese (
    id SERIAL PRIMARY KEY,
    descricao TEXT
);

-- =========================
-- TABELA: cronograma
-- =========================
CREATE TABLE cronograma (
    id SERIAL PRIMARY KEY,
    inicio DATE,
    fim DATE
);

-- =========================
-- RELAÇÃO COM VOLUNTARIO
-- =========================
ALTER TABLE voluntario
ADD COLUMN sintese_id INT,
ADD COLUMN cronograma_id INT;

ALTER TABLE voluntario
ADD CONSTRAINT fk_sintese
FOREIGN KEY (sintese_id) REFERENCES sintese(id);

ALTER TABLE voluntario
ADD CONSTRAINT fk_cronograma
FOREIGN KEY (cronograma_id) REFERENCES cronograma(id);