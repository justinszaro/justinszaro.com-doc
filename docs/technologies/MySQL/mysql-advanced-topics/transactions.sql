USE scratch;
DROP TABLE IF EXISTS widgetInformation;
DROP TABLE IF EXISTS widgetSales;
CREATE TABLE widgetInformation (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    onhand INTEGER NOT NULL,
);
CREATE TABLE widgetSales (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    inv_id INTEGER,
    quan INTEGER,
    price INTEGER
);
INSERT INTO widgetInventory (description, onhand) VALYES ('rock', 25);
INSERT INTO widgetInventory (description, onhand) VALYES ('paper', 25);
INSERT INTO widgetInventory (description, onhand) VALYES ('scissors', 25);
SELECT * FROM widgetInventory;

START TRANSACTION
INSERT INTO widgetSales ( inv_id, quan, price ) VALUES ( 1, 5, 500);
UPDATE widgetInventory SET onhand = ( onhand - 5 ) WHERE id=1;
COMMIT;

SELECT * FROM widgetSales;
SELECT * FROM widgetInventory;

START TRANSACTION
INSERT INTO widgetInventory (description, onhand) VALYES ('toy', 25);
ROLLBACK;

SELECT * FROM widgetSales;
SELECT * FROM widgetInventory;