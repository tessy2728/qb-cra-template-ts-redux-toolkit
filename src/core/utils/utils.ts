

function pascalCase(str: string) {
  return str.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
}

const paramsToObjects = (queryParams: string) => {
  const urlParams = new URLSearchParams(queryParams);
  const entries: any = urlParams.entries(); //returns an iterator of decoded [key,value] tuples

  const result: any = {};
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
};

const sortByAplphabetical = (data: Array<any>, key: string) => {
  return data?.sort?.((a: any, b: any) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1;
    return 0;
  })
}

const formatFilterItems = (
  list: Array<any>,
  labelField?: string,
  valueField?: string,
  subType?: string
) => {
  if (labelField && valueField)
    return (
      list?.map?.((ele: any) => ({
        label: ele[labelField],
        value: ele[valueField],
        ...(subType ? { subType } : {}),
      })) || []
    );
  else return list?.map?.((ele: any) => ({ label: ele, value: ele })) || [];
};

export const camelToTitleCase = (text: string) => {
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const isObject = (object: any) => {
  return object && typeof object === 'object';
};

export function isEmptyValue(element: any) {
  let flag = false;
  flag = isEmpty(element);
  if (!flag) {
    flag =
      element == 'null' ||
      element == 'undefined' ||
      element == 0 ||
      element == '0';
  }
  return flag;
}

export function isEmpty(element: any) {
  return (
    !element ||
    element == 'null' ||
    element.length == 0 ||
    element.size == 0
  );
}

export function isGreaterThanZero(element: any) {
  return !isEmptyValue(element) && parseInt(element) > 0;
}

export const isEmptyJSON = (json:object) => {
  return json && Object.keys(json).length === 0 && Object.getPrototypeOf(json) === Object.prototype
}


export const isBlankStr = (str: string) => {
  return !str || str.length === 0;
};

export const isServer = () => typeof window === 'undefined';

export const isArray = (element: any) => {
  return element != undefined && Array.isArray(element);
};

export const isString = (value: any) => {
  return typeof value === 'string' || value instanceof String;
};

export const normalizeNumber = (phone: string) => {
  return phone ? parseInt(phone.replace(/[^0-9]/g, '')) : '';
};

export const normalizePhoneNumber = (phone: string) => {
  return phone ? phone.replace(/[^0-9]/g, '') : '';
};

export const maskPhone = (phone: string) => {
  if (phone) {
    const phoneNumberSplits = phone.match(/(\d{3})(\d{3})(\d{4})/);
    return phoneNumberSplits
      ? '(' +
      phoneNumberSplits[1] +
      ') ' +
      phoneNumberSplits[2] +
      '-' +
      phoneNumberSplits[3]
      : phone;
  } else return phone;
};
export const maskEmail = (email: string) => {
  return email.replace(
    /^(.)(.*)(..@.*)$/,
    (_, a, b, c) => a + b.replace(/./g, 'X') + c
  );
};

export const parseJSON = (json: any) => {
  try {
    return JSON.parse(json);
  } catch (error) {
    return false;
  }
};

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export const formatCurrency = (amt: any) => {
  return amt !== null && amt !== undefined ? dollarUS.format(Number(amt.toString().replace(/[^0-9 .]/g, ""))) : 'N/A';
};

export const encode = (str: string) => {
  return Buffer.from(str).toString('base64');
};

export const decode = (encodedStr: string) => {
  return Buffer.from(encodedStr, 'base64').toString('ascii');
}

export function sliceIntoChunks(arr: Array<any>, chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export function linkify(inputText: string) {
  let replacedText;

  //URLs starting with http://, https://, or ftp://
  const replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank" rel="noreferrer" class="text-primary break-all">$1</a>');

  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  const replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank" rel="noreferrer" class="text-primary break-all">$2</a>');

  //Change email addresses to mailto:: links.
  const replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1" class="text-primary break-all">$1</a>');

  return replacedText;
}

export const cleanURl = (str: string) => {
  return str.replace(/([^:])(\/\/+)/g, '$1/')
}

const removeWhiteSpaces = (value: string) => {
  if(value?.replaceAll) return value?.replaceAll(' ','');
}

export {
  pascalCase,
  paramsToObjects,
  formatFilterItems,
  removeWhiteSpaces,
  sortByAplphabetical
};
