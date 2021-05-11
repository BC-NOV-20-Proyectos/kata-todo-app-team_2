class Api::ProfileController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :is_auth

  def show
    @user = User.select(:id,:email,:name,:description).where(id: current_user.id)[0]
    user = User.find(current_user.id)
    profile_picture = user.profile_picture.attached? ? url_for(user.profile_picture) : nil
    render json: {
      :user => @user,
      :picture_link => profile_picture,
    }
  end

  def update
    user_data = {current_user.id => profile_params}
    if User.update(user_data.keys,user_data.values)
      render json: {
        :code => "OK"
      }
    else
      head 500
    end
  end

  def update_picture
    user = User.find(current_user.id)
    if user.profile_picture.attach(params[:profile_picture])
      render json: {
        :code => "OK"
      }
    else
      head 500
    end
  end

  private 
    def profile_params
      params.permit(:name,:email,:description,:profile_picture)
    end
end
