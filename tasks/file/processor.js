/* eslint-disable no-useless-escape */
module.exports = {
  LoggingDataProcessor: async (job) => {
    try {
      console.log(job.progress());
      job.progress(25);
      job.progress(50);
      job.progress(75);
      const edited =
        `     
            ${job.data.data}
            ${job.data.data}
            ${job.data.data}

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

            ${job.data.data}
            ${job.data.data}
            ${job.data.data}
            ${job.data.data}
      `;
      job.progress(100);
      return edited;
    } catch (error) {
      console.error(error);
    }
  }
};
