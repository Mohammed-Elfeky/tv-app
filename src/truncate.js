function truncate(input,limit) {
    if (input.length > limit) {
       return input.substring(0, limit) + '...';
    }
    return input;
 };
export default truncate;