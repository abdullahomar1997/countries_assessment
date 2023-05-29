import * as React from 'react';
import { List } from 'react-native-paper';
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';

export const CountryAccordion = ({country}) => { 
  
  const fileNameXML = `${country.name} info.xml`
  const fileNameXLS = `${country.name} info.xls`
  const fileNameCSV = `${country.name} info.csv`
  
  return (
    // <ScrollView>
      <List.Section>
        <List.Accordion
          title="Export"
          left={props => <List.Icon {...props} icon="export" />}>
            <List.Item title="Export to CSV" onPress={() => exportCSV(country,fileNameCSV)} />
            <List.Item title="Export to XML" onPress={() => exportXML(country, fileNameXML)} />
            {/* <List.Item title="Export to XLS" onPress={() => exportXLS(country, fileNameXLS)} /> */}
        </List.Accordion>
      </List.Section>
    // </ScrollView>
  );
};

const exportXLS = (data,file) => {
  let csvContent = createXLSFile(data)
  // console.log(csvContent);
  
  saveAndShareText(csvContent,file)
}

const exportXML = (data,file) => {
  const xmlContent = generateXML(data);
  saveAndShareText(xmlContent,file)
}

const exportCSV = (data,file) => {
  const csvContent = generateCSV(data);  
  saveAndShareText(csvContent,file)
}

const generateXML = (data) => {
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  
  xml += '<countries>\n';
  xml += '<country>\n';
  
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      xml += `  <${key}>${data[key]}</${key}>\n`;
    }
  }
  
  xml += '</country>';
  xml += '</countries>';
  return xml;
};

const generateCSV = (data) => {
  let csv = '';

  const headers = Object.keys(data);
  csv += headers.join(',') + '\n';

  const rows = Object.values(data);
  csv += rows.join(',') + '\n';

  return csv;
};

const createXLSFile = async (data) => {
    const worksheet = XLSX.utils.json_to_sheet([data]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const fileText = XLSX.write(workbook, { type: 'base64', bookType: 'xlsx' });

    const buffer = new Uint8Array(fileText.length);
    for (let i = 0; i < fileText.length; i++) {
      buffer[i] = fileText.charCodeAt(i) & 0xff;
    }

    return fileText;
};

const saveAndShareText = async (data,fileName) => {
     
  try {
    
    const fileUri = FileSystem.documentDirectory + fileName;
    await FileSystem.writeAsStringAsync(fileUri, data);

    await shareAsync(fileUri);
  } catch (error) {
    console.log('Error saving or sharing the text:', error);
  }
}




