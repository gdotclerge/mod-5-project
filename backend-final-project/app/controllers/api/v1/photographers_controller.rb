class Api::V1::PhotographersController < ApplicationController
  skip_before_action :authorized, only: [:index]


  def index
    @photographers = Photographer.all
    render json:  @photographers, status: 200
  end


  def show
    @photographer = Photographer.find(params[:id])
    render json: @photographer
  end


end
