import { Exception } from 'sass';

export const getBase64 = (file: File): Promise<{ data: string }> =>
  new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      if (!reader.result) {
        throw new Error('Error');
      }

      if (typeof reader.result === 'string') {
        resolve({
          data: reader.result.split(':')[1],
        });
      }
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  });
