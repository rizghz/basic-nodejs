/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */


function getProvinces(countryId, callback) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countryId !== 'id') {
                reject(new Error('Country not found'));
                return;
            }
            resolve([
                { id: 'id-jk', name: 'Jakarta' },
                { id: 'id-bt', name: 'Banten' },
                { id: 'id-jr', name: 'Jawa Barat' },
            ]);
        }, 1000);
    });
}


module.exports = { getProvinces: getProvinces };
