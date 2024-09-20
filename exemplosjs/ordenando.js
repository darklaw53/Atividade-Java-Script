const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) 
    {
        let idx1 = Math.floor(Math.random() * arr.length);
        let idx2;
        do 
        {
            idx2 = Math.floor(Math.random() * arr.length);
        } while (idx1 === idx2); 
        swap(arr, idx1, idx2);
    }
};

const bubble_sort = (arr) => {
    let n = arr.length;
    let swapped;
    do 
    {
        swapped = false;
        for (let i = 0; i < n - 1; i++) 
        {
            if (arr[i] > arr[i + 1]) 
            {
                    swap(arr, i, i + 1);
                    swapped = true;
            }
        }
        n--;
    } while (swapped);
};

const selection_sort = (arr) => {
let n = arr.length;
for (let i = 0; i < n - 1; i++) 
    {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) 
        {
            if (arr[j] < arr[minIdx]) 
            {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            swap(arr, i, minIdx);
        }
    }
};

const quick_sort = (arr, low, high) => {
    if (low < high) 
    {
        let pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
};

const particionamento = (arr, low, high) => {
    let pivot = arr[high]; 
    let i = low - 1;

    for (let j = low; j < high; j++) 
    {
        if (arr[j] < pivot) 
        {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};
  