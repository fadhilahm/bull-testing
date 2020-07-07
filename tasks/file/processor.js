/* eslint-disable no-useless-escape */
module.exports = {
  LoggingDataProcessor: async ({ data, progress }) => {
    try {
      const edited =
        `     
            ${data.data}
            ${data.data}
            ${data.data}

            -.._____..-'|
           :  > .  ,  <  :
            ./ __ ' __ \,'
            | (|_) (|_) |
            ; _  .  __  :
             .,' - _-. ,'
              _, __  .'
              /       \
             /         :
            :          |_
           ,|  .    .  | \
          : :   \   |  |  :
          |  \   :_-;  ;  |
          :   :  | /  /   ;
           :-.'  ;'  / _,'_------.
           _'_''-_'''-'-''--.---  )
                        SSt _----'

            ${data.data}
            ${data.data}
            ${data.data}
            ${data.data}
      `;
      return edited;
    } catch (error) {
      console.error(error);
    }
  }
};
