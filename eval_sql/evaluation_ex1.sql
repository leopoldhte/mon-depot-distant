/*CREATE DATABASE IF NOT EXISTS evaluation;

CREATE TABLE clientb(
	cli_num INT,
	cli_nom VARCHAR(50),
	cli_adresse VARCHAR(50),
	cli_tel VARCHAR(30),
	CONSTRAINT form_cli_num_PK PRIMARY KEY (cli_num)
	);
	
CREATE TABLE commande(
	com_num INT,
	cli_num INT,
	com_date DATETIME,
	com_obs VARCHAR(50),
	CONSTRAINT form_com_num_PK PRIMARY KEY (com_num),
	CONSTRAINT form_cli_num_FK FOREIGN KEY (cli_num) REFERENCES clientb(cli_num)
	);
	
CREATE TABLE produit(
	pro_num INT,
	pro_libelle VARCHAR(50),
	pro_description VARCHAR(30),
	CONSTRAINT form_pro_num_PK PRIMARY KEY (pro_num)
	);
	
CREATE TABLE est_compose(
	com_num INT,
	pro_num INT,
	est_qte INT,
CONSTRAINT form_com_pro_num_PK PRIMARY KEY (com_num,pro_num),
CONSTRAINT form_com_num_FK FOREIGN KEY (com_num) REFERENCES commande(com_num),
CONSTRAINT form_pro_num_FK FOREIGN KEY (pro_num) REFERENCES produit(pro_num)
);

CREATE INDEX index_princip ON clientb(cli_nom);
SHOW INDEX FROM clientb
*/
