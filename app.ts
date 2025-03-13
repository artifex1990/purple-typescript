function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

fetchWithAuth('users', 'post');

let method = 'post';

fetchWithAuth('users', method as 'post');
