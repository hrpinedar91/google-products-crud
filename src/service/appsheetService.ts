const APP_KEY = 'V2-xJH6u-F60GE-g8PiL-rSZOo-2ggMl-jiP4i-ETYCL-uTgZ7';
const BASE_URL = 'https://api.appsheet.com/api/v2/apps/feced652-80f4-4f67-be21-105faa1eb2d5';

interface AppSheetRequest {
  action: string;
  properties?: object;
  rows?: any[];
}

const appsheetRequest = async ({ action, properties = {}, rows = [] }: AppSheetRequest, tableName: string) => {
  const response = await fetch(`${BASE_URL}/tables/${tableName}/Action`, {
    method: 'POST',
    headers: {
      'ApplicationAccessKey': APP_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "Action": action,
      "Properties": properties,
      "Rows": rows,
    }),
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
};

// CREATE: Añadir nuevo producto o fila
export const addRow = async (tableName: string, row: any) => {
  return await appsheetRequest(
    {
      action: 'Add',
      properties: {
        "Locale": "es-ES",
        "Timezone": "Pacific Standard Time"
      },
      rows: [row],
    },
    tableName
  );
};

// READ: Obtener todos los productos o filas
export const findRows = async (tableName: string, filter = 'true') => {
  return await appsheetRequest(
    {
      action: 'Find',
      properties: {
        "Selector": `Filter(${tableName},${filter})`
      },
    },
    tableName
  );
};

// UPDATE: Actualizar una fila existente
export const updateRow = async (tableName: string, row: any) => {
  return await appsheetRequest(
    {
      action: 'Edit',
      rows: [row],
    },
    tableName
  );
};

// DELETE: Eliminar una fila
export const deleteRow = async (tableName: string, rowKey: string) => {
  return await appsheetRequest(
    {
      action: 'Delete',
      rows: [{ "Key": rowKey }],
    },
    tableName
  );
};
